import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from './preview.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [PreviewComponent],
  exports:[
    PreviewComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class PreviewModule { }
