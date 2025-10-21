---
title: Random walk with Penguins
description: Honoured to win the 1st prize in a Data Science competition Random Walk of Penguins hosted by DrivenData. Sharing the winning approach here...
date: 2017-07-27T02:01:58+05:30
tags: [datascience,competitions]
layout: default
---

Honoured to win the 1st prize in the [Random Walk of Penguins](https://www.drivendata.org/competitions/47/penguins/) challenge hosted by [DrivenData](https://www.drivendata.org/), and proudly sponsored by NASA. This post revisits the competition, shares the end-to-end solution, and highlights the lessons that continue to shape how I build resilient forecasting systems today.

# Introduction           

Penguins are among the most charismatic animals in the world and have captured the imaginations of news-makers, scientists, film producers, and the general public. Beyond their charm, they are considered important ecosystem indicators. Monitoring these resilient birds helps scientists understand the health of the Antarctic because penguins are major krill and fish predators; fluctuations in their populations often signal changes in ocean temperatures, prey availability, or human impact.

Unfortunately, data on penguin colonies are sparse. Most monitoring stations are situated near permanent research bases, and expeditions to remote cliffs and icy archipelagos are infrequent. Time series are short, riddled with missing values, and inconsistent across locations. The competition set a bold challenge: build trustworthy models that could extrapolate populations for hard-to-reach sites and extend projections through 2017—enabling policy makers to proactively respond to ecological risk.

This initiative brought together **Oceanites, Inc., Black Bawks Data Science Ltd., and Dr. Heather Lynch's lab at Stony Brook University**, with generous support from **NASA (Award NNX14AC32G)**. For me, it was a rare opportunity to blend environmental stewardship with applied machine learning at scale.

# Understanding the data             

The organisers released longitudinal counts for three penguin species—Adélie, Chinstrap, and Gentoo—spanning 548 Antarctic sites between 1875 and 2013. After combining species and site identifiers, we were left with 648 unique time series. Each series was unevenly sampled, contained long gaps, and exhibited starkly different behaviours: explosive growth near certain colonies, slow recovery after El Niño events, and plateaus where predators stabilised.

The task was to forecast annual colony sizes for 2014–2017. Success depended on addressing both data quality and methodological diversity; a single algorithm could not capture the heterogeneity present across the Southern Ocean.

# Solution architecture         

I split the workflow into two deliberate stages:

1. **Data imputation** – stabilise every time series so models receive coherent signals.
2. **Model ensemble** – build a diverse set of learners and aggregate their strengths.

An orchestration notebook generated reproducible pipelines per species-site combination, keeping experiment logs and metrics aligned for quick comparison.

# Imputation strategy           

Ensuring continuity in the signals was the most labour-intensive step. For every species-site pair I applied a cascade of imputers, promoting domain-plausible values before falling back to conservative defaults:

* **Spline / linear interpolation:** Stineman interpolation (R) or linear interpolation (Python) to reconstruct gentle seasonal shifts without overfitting spikes.
* **Last Observation Carried Forward (LOCF):** preserve recent momentum for short gaps, especially near boom years influenced by favourable sea ice.
* **Next Observation Carried Backward (NOCB):** support early series by borrowing the nearest future measurement.
* **Zero fill:** as a final fallback, signalling colonies that truly reported no presence for extended windows.

Each imputed series was visualised for sanity checks, and the pipeline wrote diagnostic summaries so outliers could be manually reviewed.

# Modelling playbook           

No single class of models performed best across the board, so I assembled a portfolio that combined tree-based regressors with statistical time-series forecasters:

* **XGBoost (Python):** captured non-linear interactions between lag features, rolling statistics, and encoded site metadata.
* **Random Forest (Python):** provided stability against noisy imputations and highlighted feature importance for ecological insights.
* **ARIMA (R):** suited to sites with clear autoregressive structures and limited exogenous signals.
* **ETS (R):** modelled colonies exhibiting trend and level shifts without requiring heavy parameter tuning.
* **Prophet (R):** handled yearly seasonality, holidays (breeding cycles), and provided intuitive uncertainty bands.

For each of the 648 combinations, predictions from the five models were averaged. The simple ensemble consistently outperformed individual contributors by balancing variance and bias, and it offered practitioners a transparent explanation when communicating with scientists.

# Results and impact

The blended forecasts delivered the lowest leaderboard error, securing the top position. More importantly, the approach demonstrated that thoughtful data repair plus model plurality can create dependable projections even when observations are sparse. Oceanites received reproducible code and documentation, and I later collaborated with the organisers to ensure the findings were spotlighted on the DrivenData blog.

# Lessons learnt

* **Data empathy first:** Invest in understanding why values are missing and what biological limits should constrain imputations.
* **Embrace model diversity:** Ecological systems are messy; a multi-model view prevents overconfidence.
* **Storytelling matters:** Clear visualisations and annotations help subject-matter experts trust machine-assisted decisions.

Thanks for reading. Explore the official write-up on the [DrivenData blog](http://blog.drivendata.org/2017/08/28/random-walk-of-the-penguins/) for a behind-the-scenes look at the competition and the broader conservation effort.
