import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    // declarations: [ SharedModule ],
    exports: [
        CommonModule,
        FormsModule
    ]
})
export class SharedModule {}
