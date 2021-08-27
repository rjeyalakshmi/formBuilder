import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormbuilderComponent}  from './formbuilder.component';
import { ControlsModule } from './controls/controls.module';
import { FormRendererModule } from './form-renderer/form-renderer.module';
import { PreviewModule } from './preview/preview.module';

@NgModule({
  declarations: [FormbuilderComponent],
  exports: [FormbuilderComponent],
  imports: [
    CommonModule,
    ControlsModule,
    FormRendererModule,
    PreviewModule
  ]
})
export class FormBuilderModule { 

}
