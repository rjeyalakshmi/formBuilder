import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRendererComponent } from './form-renderer.component';
import { DropTargetDirective } from 'src/app/shared/directives/droppable.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormRendererComponent, DropTargetDirective],
  exports: [
    FormRendererComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule    
    ]
})
export class FormRendererModule { }
