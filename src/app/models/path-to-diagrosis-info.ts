/**
 * Patient path to diagnosis
 */
import {FirstPidSymptomModels} from './firstPidSymptomModels';

export class PatientPathToDiagnosis {
    "firstDiagnosisPidDate": string = null;
    "pidLabOnly": string = "";
    "firstPidSymptomModels": Array<FirstPidSymptomModels>=[];
    "igg": number = null;
    "iga": number = null;
    "igm": number = null;
    "ige": number = null;
    "diagnosesModel": number = null;
}
