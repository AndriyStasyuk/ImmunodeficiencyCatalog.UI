import { TrustedString } from "@angular/core/src/sanitization/bypass";

/**
 * Patient
 */

export class Patient {
    esid: string;
    getAge: number;
    firstDiagnosisPidDate: string;
    endImunoglobulinInjectionDate: string;
    actualInjectionType: string;
    dose: number;
    producer: string;
    review: string;
}
