import {Directive, HostBinding, HostListener, Input} from '@angular/core';
import {DragService} from '../services/drag-service.service';

// 1
@Directive({
  selector: '[formDraggable]'
})
export class DraggableDirective {

  constructor(private dragService: DragService) {
  }

  @HostBinding('draggable')
  get draggable() {
    return true;
  }

  @Input()
  set formDraggable(options: DraggableOptions) {
    if (options) {
      this.options = options;
    }
  }

  private options: DraggableOptions = {};

  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
    const { zone = 'zone', data = {} } = this.options;

    this.dragService.startDrag(zone);
    
    event.dataTransfer.setData('Text', JSON.stringify(data));
  }
  
}
export interface DraggableOptions {
  zone?: string;
  data?: any;
}