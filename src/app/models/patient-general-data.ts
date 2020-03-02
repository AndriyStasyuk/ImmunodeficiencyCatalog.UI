import { eSIDModels } from './eSIDModels';
/**
 * Patient general data
 */

export class PatientGeneralData {
    "firstName": string;
    "middleName": string;
    "lastName": string;
    "birthdayDate": string;
    "sex": string;
    "alive"?: string;
    "RadiosAgreement"?: string;
    "familyTiesPid"?: string;
    "LiveCity"?: number;
    "CityId"?: number;
    "eSIDModels"?: Array<eSIDModels>=[];
}
