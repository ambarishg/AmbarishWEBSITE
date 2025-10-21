**Every third bite of food relies on pollination by bees.** Honey beehive losses spike when disease spreads unchecked, and traditional inspection methods are intrusive and time-consuming. Our Azure-powered Bees Health Detection solution uses computer vision to monitor for deformed wings, mites, and other visible symptoms—helping beekeepers protect colonies before collapse occurs.

This expanded walkthrough documents the full lifecycle, from dataset curation to model deployment, along with the story behind Microsoft India showcasing the project.

---

# Why bees, why AI?

- **Ecological urgency:** Bees underpin global food security, yet varroa mites and hive beetles can decimate hives silently.
- **Operational friction:** Physical inspections disrupt hive activity and cannot scale across hundreds of colonies.
- **Vision opportunity:** Diseased bees exhibit exterior changes (mites, deformed wings) that can be identified via images as bees exit the hive.
- **Goal:** Build a fast, reliable detector using **Azure Custom Vision** that flags healthy bees versus ant infestations and varroa/hive beetle infections.

---

# Data strategy

Primary dataset: [Honey Bee Images Full Set](https://www.kaggle.com/jenny18/honey-bee-annotated-images)

To accelerate experiments, I curated a derived subset—[Bees Little Data Set](https://www.kaggle.com/ambarish/beeslittledataset)—with ~100 images per class (healthy, ant problems, varro/hive beetles).

Key preparation steps:

1. **Class balancing:** equal representation of each health label to avoid biased predictions.
2. **Augmentations:** rotation and lighting adjustments to mimic field conditions.
3. **Quality screening:** remove blurred or ambiguous images to maintain label fidelity.

---

# Solution architecture

1. **Provision Azure Custom Vision resources** (training + prediction) on Free Tier to stay cost-efficient.
2. **Create a classification project**:
   - Project type: `Classification > Multiclass`.
   - Tags: Healthy, Ant problems, Varro/Hive beetles.
3. **Upload and tag images** via the Custom Vision portal for each class.
4. **Train iterations** using *Quick Training* for rapid feedback, moving to *Advanced* when satisfied with baseline metrics.
5. **Evaluate metrics** (precision, recall, accuracy) before publishing.
6. **Publish iteration** to the prediction resource, enabling REST API consumption.

![Training overview](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r93sbvxxv1stn2vqxlm4.png)

---

# Testing & validation

- **Quick Tests** within the portal confirm confidence scores per class.
- **Holdout images** (never tagged) provide manual validation.
- **Telemetry:** Precision/recall scores consistently high across classes.

Example: An input bee showing ant infestation returned the highest probability for the “ant problems” tag—confirming the model’s efficacy.

---

# Operationalising the model

Once satisfied with metrics:

- Publish the iteration under a recognizable name (`bee`) against the prediction resource (`bee-Prediction`).
- Retrieve project ID, published name, and endpoint for client integration.
- Manage training and prediction resources centrally via Azure Cognitive Services portal.

![Published model](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sc7hzr74m3r3lhj0mq6d.png)

---

# Reference implementation (Node.js)

A production-ready example lives on GitHub: {% github ambarishg/beeshealthdetection %}

Key snippets:

```javascript
const TrainingApi = require('@azure/cognitiveservices-customvision-training');
const PredictionApi = require('@azure/cognitiveservices-customvision-prediction');
const msRest = require('@azure/ms-rest-js');
```

Configure credentials:

```javascript
const predictionKey = '<prediction key>';
const endPoint = 'https://bees.cognitiveservices.azure.com/';
const projectId = '<your-project-id>';
const publishIterationName = 'bees';
```

Predict on unseen images:

```javascript
const predictorCredentials = new msRest.ApiKeyCredentials({
  inHeader: { 'Prediction-key': predictionKey }
});
const predictor = new PredictionApi.PredictionAPIClient(
  predictorCredentials,
  endPoint
);

const testFile = fs.readFileSync('f:/bees/Test/040_314.png');

(async () => {
  const results = await predictor.classifyImage(projectId, publishIterationName, testFile);
  results.predictions.forEach((prediction) => {
    console.log(`${prediction.tagName}: ${(prediction.probability * 100).toFixed(2)}%`);
  });
})();
```

---

# Showcase: Microsoft India feature

Microsoft India spotlighted the solution in their “AI for Farmers and Sustainability” series, highlighting:

- Low-code Azure tooling enabling domain experts to prototype quickly.
- Real-world impact for agriculture and apiculture communities.
- Inspiration for leveraging cloud AI services for conservation.

Watch the feature: [Bees Health Detection on Microsoft Azure](https://www.youtube.com/watch?v=d92H_wPyrUE&t=16s)

---

# Results & impact

- **Accuracy:** Ensemble model maintained high precision/recall across all classes.
- **Efficiency:** Automated screening reduces manual inspections and hive disruption.
- **Scalability:** Azure-hosted API supports mobile/edge integration for field teams.
- **Visibility:** The project’s showcase amplified awareness of tech-enabled conservation.

---

# Next steps

- Expand dataset with seasonal variations and additional disease markers.
- Deploy lightweight inference to edge devices near hives.
- Integrate predictive analytics for hive-level trend monitoring.
- Collaborate with agricultural boards to pilot at scale.

---

# References

1. [Node.js & Azure Custom Vision Quickstart](https://learn.microsoft.com/en-us/azure/cognitive-services/custom-vision-service/quickstarts/image-classification?tabs=visual-studio&pivots=programming-language-javascript)

---

*If you implement or extend this solution, I’d love to hear from you—let’s build technology that protects pollinators worldwide.*

