import { eSIDModels } from './eSIDModels';
/**
 * Patient general data
 */

export class PatientGeneralData {
    "firstName": string = "";
    "middleName": string = "";
    "lastName": string = "";
    "birthdayDate": string = "";
    "sex": string = "";
    "alive"?: string = "Так";
    "RadiosAgreement"?: string = "";
    "familyTiesPid"?: string = "";
    "LiveCity"?: number = null;
    "CityId"?: number = null;
    "eSIDModels"?: Array<eSIDModels>=[];
}
