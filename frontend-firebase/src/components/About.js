import React from 'react';
let prediction;
const About = () => (
  <div>
  <form action="/getprediction" method="POST" onSubmit={this.prediction.bind(this)}>
  <p>Diagnosis Age: <input type="text" name="Diagnosis Age" /></p>
  <p>ER Status By IHC: <input type="text" name="ER Status By IHC" /></p>
  <p>Person Gender: <input type="text" name="Person Gender" /></p>
  <p>Neoplasm Histologic Type Name: <input type="text" name="Neoplasm Histologic Type Name" /></p>
  <p>IHC-HER2: <input type="text" name="IHC-HER2" /></p>
  <p>Primary Lymph Node Presentation Assessment Ind-3: <input type="text" name="Primary Lymph Node Presentation Assessment Ind-3" /></p>
  <p>Menopause Status: <input type="text" name="Menopause Status" /></p>
  <p>First Pathologic Diagnosis Biospecimen Acquisition Method Type: <input type="text" name="First Pathologic Diagnosis Biospecimen Acquisition Method Type" /></p>
  <p>Oncotree Code: <input type="text" name="Oncotree Code" /></p>
  <p>Primary Tumor Site: <input type="text" name="Primary Tumor Site" /></p>
  <p>PR status by ihc: <input type="text" name="PR status by ihc" /></p>
  <p>AgeCat: <input type="text" name="AgeCat" /></p>
  <p>Fraction Genome Altered: <input type="text" name="Fraction Genome Altered" /></p>
  <p>Lymph Node(s) Examined Number: <input type="text" name="Lymph Node(s) Examined Number" /></p>
  <p>Mutation Count: <input type="text" name="Mutation Count" /></p>

  <p><input type="submit" value="Predict" /></p>
</form>
<h1>Likelihood of having: {{ prediction }}</h1>
  </div>
);

export default About;