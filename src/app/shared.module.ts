import { ReactiveFormsModule } from '@angular/forms';
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildrenComponent } from './children/children.component';


@NgModule({
    declarations: [
        ChildrenComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ChildrenComponent
    ]
})
export class SharedModule {
}