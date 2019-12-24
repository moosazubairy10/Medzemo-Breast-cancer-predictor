from flask import Flask, request, render_template, jsonify,make_response
import pdfkit
from sklearn.externals import joblib
from sklearn.preprocessing import Normalizer
import matplotlib.pyplot as plt
import pickle
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/')
def index():

    return jsonify(Message="100% Ho Gyi")


@app.route('/getprediction', methods=['POST'])
def get_prediction():
    req = request.get_json()
    print(req)
    Diagnosis_Age = req.get("Diagnosis Age", False)
    ER_Status_By_IHC = req.get("ER Status By IHC", False)
    Person_Gender = req.get("Person Gender", False)
    Neoplasm_Histologic_Type_Name = req.get(
        "Neoplasm Histologic Type Name", False)
    IHC_HER2 = req.get("IHC-HER2", False)
    Primary_Lymph_Node_Presentation_Assessment_Ind_3 = req.get(
        "Primary Lymph Node Presentation Assessment Ind-3", False)
    Menopause_Status = req.get("Menopause Status", False)
    First_Pathologic_Diagnosis_Biospecimen_Acquisition_Method_Type = req.get(
        "First Pathologic Diagnosis Biospecimen Acquisition Method Type", False)
    Oncotree_Code = req.get("Oncotree Code", False)
    Primary_Tumor_Site = req.get("Primary Tumor Site", False)
    PR_status_by_ihc = req.get("PR status by ihc", False)
    AgeCat = req.get("Age Category", False)
    Fraction_Genome_Altered = req.get("Fraction Genome Altered", False)
    Lymph_Nodes_Examined_Number = req.get(
        "Lymph Node(s) Examined Number", False)
    Mutation_Count = req.get("Mutation Count", False)

    Diagnosis_Age = float(Diagnosis_Age)
    ER_Status_By_IHC = float(ER_Status_By_IHC)
    Person_Gender = float(Person_Gender)
    Neoplasm_Histologic_Type_Name = float(Neoplasm_Histologic_Type_Name)
    IHC_HER2 = float(IHC_HER2)
    Primary_Lymph_Node_Presentation_Assessment_Ind_3 = float(
        Primary_Lymph_Node_Presentation_Assessment_Ind_3)
    Menopause_Status = float(Menopause_Status)
    First_Pathologic_Diagnosis_Biospecimen_Acquisition_Method_Type = float(
        First_Pathologic_Diagnosis_Biospecimen_Acquisition_Method_Type)
    Oncotree_Code = float(Oncotree_Code)
    Primary_Tumor_Site = float(Primary_Tumor_Site)
    PR_status_by_ihc = float(PR_status_by_ihc)
    AgeCat = float(AgeCat)
    Fraction_Genome_Altered = float(Fraction_Genome_Altered)*1.002918146
    Lymph_Nodes_Examined_Number = float(Lymph_Nodes_Examined_Number)*0.027272727
    Mutation_Count = float(Mutation_Count)*0.000260010400

    x_factors = np.array([
        Diagnosis_Age, ER_Status_By_IHC, Person_Gender,
        Neoplasm_Histologic_Type_Name, IHC_HER2,
        Primary_Lymph_Node_Presentation_Assessment_Ind_3, Menopause_Status,
        First_Pathologic_Diagnosis_Biospecimen_Acquisition_Method_Type,
        Oncotree_Code, Primary_Tumor_Site, PR_status_by_ihc, AgeCat,
        Fraction_Genome_Altered, Lymph_Nodes_Examined_Number, Mutation_Count
    ])
    print(x_factors)
    x_factors = x_factors.reshape(1, -1)

    model = pickle.load(open('model.pkl', 'rb'))
    prediction = model.predict(x_factors)
    print(prediction)
    
    # return render_template(
    #     'pdf_template.html', Diagnosis_Age=Diagnosis_Age, ER_Status_By_IHC=ER_Status_By_IHC, Person_Gender=Person_Gender, Neoplasm_Histologic_Type_Name=Neoplasm_Histologic_Type_Name,
    #     IHC_HER2=IHC_HER2, Primary_Lymph_Node_Presentation_Assessment_Ind_3=Primary_Lymph_Node_Presentation_Assessment_Ind_3,
    #     Menopause_Status=Menopause_Status, First_Pathologic_Diagnosis_Biospecimen_Acquisition_Method_Type=First_Pathologic_Diagnosis_Biospecimen_Acquisition_Method_Type,
    #     Oncotree_Code=Oncotree_Code, Primary_Tumor_Site=Primary_Tumor_Site, PR_status_by_ihc=PR_status_by_ihc,
    #     AgeCat=AgeCat, Fraction_Genome_Altered=Fraction_Genome_Altered, Lymph_Nodes_Examined_Number=Lymph_Nodes_Examined_Number,
    #     Mutation_Count=Mutation_Count)
    # pdf=pdfkit.from_string(rendered,False)
    
    # response=make_response(pdf)
    # response.headers['content-Type']='application/pdf'
    # response.headers['content-Disposition'] = 'inline; filename=output.pdf'
    
    # return render_template('pdf_template.html')
    # return response
    return jsonify(finalPrediction=prediction.item(0))


# @app.route('/survRisk', methods=['POST'])
# def surv_Risk():
#     return render_template('survRisk.html')


@app.route('/survivalprediction', methods=['POST'])
def get_survprediction():
    req = request.get_json()
    print(req)
    
    ER_Status_Primary = req.get("ER Status Primary", False)
    HER2_Primary_Status = req.get("HER2 Primary Status", False)
    Primary_Tumor_Laterality = req.get("Primary Tumor Laterality", False)
    Menopausal_Status_At_Diagnosis = req.get(
        "Menopausal Status At Diagnosis", False)
    Metastatic_Disease_at_Last_Follow_up = req.get("Metastatic Disease at Last Follow-up", False)
    Overall_Patient_HER2_Status = req.get(
        "Overall Patient HER2 Status", False)
    Overall_Patient_HR_Status = req.get("Overall Patient HR Status", False)
    
    PR_Status_Primary = req.get("PR Status Primary", False)
    Site_of_Sample = req.get("Site of Sample", False)
    Sample_Type= req.get("Sample Type", False)
    Stage_at_Diagnosis = req.get("Stage at Diagnosis", False)
    Tumor_Stage= req.get("Tumor Stage", False)
    Age_Category = req.get(
        "Age Category", False)
    Fraction_Genome_Altered = req.get("Fraction Genome Altered", False)
    Mutation_Count = req.get(
        "Mutation Count", False)
    



    ER_Status_Primary = float(ER_Status_Primary)
    HER2_Primary_Status = float(HER2_Primary_Status)
    Primary_Tumor_Laterality = float(Primary_Tumor_Laterality)
    Menopausal_Status_At_Diagnosis = float(Menopausal_Status_At_Diagnosis)
    Metastatic_Disease_at_Last_Follow_up = float(Metastatic_Disease_at_Last_Follow_up)
    Overall_Patient_HER2_Status = float(
        Overall_Patient_HER2_Status)
    Overall_Patient_HR_Status = float(Overall_Patient_HR_Status)
    
    PR_Status_Primary = float(PR_Status_Primary)
    Site_of_Sample = float(
        Site_of_Sample)
    Sample_Type= float(Sample_Type)
    Stage_at_Diagnosis = float(Stage_at_Diagnosis)
    Tumor_Stage = float(Tumor_Stage)
    Age_Category = float(Age_Category)
    Fraction_Genome_Altered = float(Fraction_Genome_Altered)
    Mutation_Count = float(Mutation_Count)*0.00225734
    

    x_factors = np.array([
        ER_Status_Primary, HER2_Primary_Status, Primary_Tumor_Laterality,
        Menopausal_Status_At_Diagnosis, Metastatic_Disease_at_Last_Follow_up,
        Overall_Patient_HER2_Status, Overall_Patient_HR_Status,
        PR_Status_Primary,
        Site_of_Sample, Sample_Type, Stage_at_Diagnosis, Tumor_Stage,
        Age_Category, Fraction_Genome_Altered , Mutation_Count
    ])
    print(x_factors)
    x_factors = x_factors.reshape(1, -1)

    model = pickle.load(open('model1.pkl', 'rb'))
    prediction = model.predict_proba(x_factors)
    print(prediction)
    return jsonify(finalPrediction1=prediction.item(0), finalPrediction2=prediction.item(1))


@app.route('/TNBCprediction', methods=['POST'])
def get_tnbcprediction():
    req = request.get_json()
    print(req)
    ALDH1A1 = req.get("ALDH1A1", False)
    GLI2 = req.get("GLI2", False)
    BRCA1 = req.get("BRCA1", False)
    BRCA2 = req.get("BRCA2", False)
    CDH1 = req.get("CDH1", False)
    PTEN = req.get("PTEN", False)
    PTPN3 = req.get("PTPN3", False)
    TP53 = req.get("TP53", False)
    PDGFD = req.get("PDGFD", False)
    CLDN2 = req.get("CLDN2", False)
    TJP2 = req.get("TJP2", False)
    CD44 = req.get("CD44", False)
    PAM50_Basal = req.get("PAM50_Basal", False)
    PAM50_LumA = req.get("PAM50_LumA", False)
    PAM50_LumB = req.get("PAM50_LumB", False)
    PAM50lite_Basal = req.get("PAM50lite_Basal", False)
    PAM50lite_Non_basal = req.get("PAM50lite_Non_basal", False)

    ALDH1A1 = float(ALDH1A1)
    GLI2 = float(GLI2)
    BRCA1 = float(BRCA1)
    BRCA2 = float(BRCA2)
    CDH1 = float(CDH1)
    PTEN = float(PTEN)
    PTPN3 = float(PTPN3)
    TP53 = float(TP53)
    PDGFD = float(PDGFD)
    CLDN2 = float(CLDN2)
    TJP2 = float(TJP2)
    CD44 = float(CD44)
    PAM50_Basal = float(PAM50_Basal)
    PAM50_LumA = float(PAM50_LumA)
    PAM50_LumB = float(PAM50_LumB)
    PAM50lite_Basal = float(PAM50lite_Basal)
    PAM50lite_Non_basal = float(PAM50lite_Non_basal)

    x_factors = np.array([
        ALDH1A1, GLI2, BRCA1, BRCA2, CDH1, PTEN, PTPN3, TP53, PDGFD, CLDN2,
        TJP2, CD44, PAM50_Basal, PAM50_LumA, PAM50_LumB, PAM50lite_Basal,
        PAM50lite_Non_basal
    ])
    x_factors = x_factors.reshape(1, -1)

    model = pickle.load(open('model11.pkl', 'rb'))
    prediction = model.predict_proba(x_factors)
    print(prediction)
    return jsonify(finalPrediction1=prediction.item(0), finalPrediction2=prediction.item(1))


if __name__ == '__main__':
    app.debug = True
    app.run()
