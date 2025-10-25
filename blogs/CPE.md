The Center for Policing Equity (CPE) is research scientists, race and equity experts, data virtuosos, and community trainers working together to build more fair and just systems. Data and science are our tools; law enforcement and communities are our partners. Our aim is to bridge the divide created by communication problems, suffering and generational mistrust, and forge a path towards public safety, community trust, and racial equity.

Police departments across the United States have joined our National Justice Database, the first and largest collection of standardized police behavioral data. In exchange for unprecedented access to their records (such as use of force incidents, vehicle stops, pedestrian stops, calls for service, and crime data), our scientists use advanced analytics to diagnose disparities in policing, shed light on police behavior, and provide actionable recommendations. Our highly-detailed custom reports help police departments improve public safety, restore trust, and do their work in a way that aligns with their own values.

# Problem Statement
How do you measure justice? And how do you solve the problem of racism in policing? We look for factors that drive racial disparities in policing by analyzing census and police department deployment data. The ultimate goal is to inform police agencies where they can make improvements by identifying deployment areas where racial disparities exist and are not explainable by crime rates and poverty levels.

Our biggest challenge is automating the combination of police data, census-level data, and other socioeconomic factors. Shapefiles are unusual and messy -- which makes it difficult to, for instance, generate maps of police behavior with precinct boundary layers mixed with census layers. Police incident data are also very difficult to normalize and standardize across departments since there are no federal standards for data collection

# Solution and Winning Approach
This submission highlights confounding variables by visualizing mapped census data side by side. It demonstrates why applying policies uniformly across a jurisdiction is not always effective, even within a single precinct where race and income variables can vary greatly. This analysis uses intensive data cleaning, geospatial joins, and visualizations to highlight these disparities.

# More Details
#Introduction

In this competition , we have been given the `Police District Shapefiles` and the `US Census Data`. The plan is to provide insights to the police department by combining these two datasets. In order to combine and get information from these datasets, we introduce another data set ` US Census Tract Shapefiles`.

In the following sections , for each of the Police Departments, we combine the `Police District Shapefiles` , `US Census Data` and the ` US Census Tract Shapefiles` to provide insights to the police department.


A Police District consists of many `Census Tracts`. We find which Census Tracts are associated with the Police District here.Similary a Census Tract may be associated with more than one Police District. Therefore we need to find the **Percentage of the Census District** which is in a Particular Police district. Once we find the Percentage, we multiply this percentage with the Census Value of the Census Tract to get the contribution of the Census Tract to that particular district.          

Example :

* A Census Tract is **60%** in Police District 1 and **40%** in Police District 2.Therefore the weights are 60% and 40%.  
* The Population , a particular Census Value is suppose 10,000         
* Therefor for the Census Tract in Police District 1 would be **6,000** and for Police District 2 would be **4,000**.         


<hr/>

**Insights from the detailed analysis**

<hr/>

For each of the districts, we investigate the `Black percentage`,  `Below Poverty Line Percentage`, `High School Diploma Completion Percentage` and `Median Income`. We also observe that Blacks unfortunately are associated with most of the crimes. But going deeper, we find that the Black Population is associated with regions of **high below Poverty Line percentage** and **low Median income**. Therefore it is the regions of poverty and less education , which might lead to crimes. Therefore it may be a good cue for social activists and police departments to increase education, eradicate poverty so as to reduce crimes.            

On another perspective, we find the black percentages in each of the regions of the Police District Map and the Crimes associated with the blacks in those regions. We find that the percentage of crimes associated with Blacks is much more than the percentage of Blacks living in the region. This might be due to the census value that we are taking into account is the population in **all black** regions. Moreover , we find that the Percentage of Crimes associated with the White population is much less compared to the Percentage of White Population.
This anomaly is explained in the Sections  Dept 24-00013 Map - **Hennepin County, Minnesota**  , Dept 37-00027 Map - **Travis County, Texas** and Race and Crime Analysis for **DownTown** district in **Marion County, Indiana**. The anomaly is that though the black percentage in the region is less, but crimes associated with blacks are more compared to the whites               


https://www.kaggle.com/ambarish/very-detailed-analysis-of-cpe-and-automation