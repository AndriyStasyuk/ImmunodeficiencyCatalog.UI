/**
 * Patient pid diagnosis
 */

export class PidDiagnosis {
    "DamagedGenes": string = null;
    "GenesInfo"?: string = "";
    "GeneticResearchDate": string = null;
    // "SequenticMethod": string = "";
    "SequencingMethod": string="";
    "LaboratoryId"?: number = null; //if exist
    "LaboratoryName"?: string = ""; //if new labaratory
    "GeneticResearchReason": string = "";
    "PatientId":number;
}
