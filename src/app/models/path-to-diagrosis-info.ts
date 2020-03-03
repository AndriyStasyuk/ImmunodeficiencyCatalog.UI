/**
 * Patient path to diagnosis
 */
import {FirstPidSymptomModels} from './firstPidSymptomModels';
export class PatientPathToDiagnosis {
    "firstDiagnosisPidDate": string;
    "pidLabOnly": string;
    "firstPidSymptomModels": Array<FirstPidSymptomModels>=[];
    "igg": number;
    "iga": number;
    "igm": number;
    "ige": number;

}
