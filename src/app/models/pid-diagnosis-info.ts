/**
 * Patient pid diagnosis
 */

export class PidDiagnosis {
    "DamagedGenes": string = "";
    "GenesInfo"?: string = "";
    "GeneticResearchDate": string = "";
    "SequenticMethod": string = "";
    "LaboratoryId"?: number = null; //if exist
    "LaboratoryName"?: string = ""; //if new labaratory
    "GeneticResearchReason": string = "";
    "MutationsYes": string = "";
    "MutationsNo": string = "";
}
