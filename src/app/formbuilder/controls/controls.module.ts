import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsComponent } from './controls.component';
import { DraggableDirective } from '../../shared/directives/draggable.directive';

@NgModule({
  declarations: [ControlsComponent, DraggableDirective],
  exports: [ControlsComponent],
  imports: [
    CommonModule
  ]
})
export class ControlsModule { 

}
