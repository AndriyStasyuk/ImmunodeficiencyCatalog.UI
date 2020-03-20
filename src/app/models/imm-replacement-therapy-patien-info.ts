import { Patient } from './patients';
/**
 * Patient immunoglobulin replacement therapy info
 */

export class ImmunoglobulinReplacementTherapyInfo {
  
    "RITTillToday": string = "";
    "EndImunoglobulinInjectionDate": string = null;
    "ProducerId": number = null;
    "ProducerName": string = "";
    "ActualInjectionType": string = "";
    "ActualInjectionLocation": string = "";
    "Dose": number = null;
    "InjectionInterval": string = "";
    "PatientWeight": number = null;
    "RecordedPhenomena": string = "";
    "RecordedPhenomenaYes": string = "";
    "igg_rit": number = null;
    "PatientId":number;
}
