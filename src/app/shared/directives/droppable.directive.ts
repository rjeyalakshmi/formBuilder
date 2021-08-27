import {Directive, HostListener, EventEmitter, Input, Output, ElementRef} from '@angular/core';
import {DragService} from '../services/drag-service.service';

@Directive({
  selector: '[formDropTarget]'
})
export class DropTargetDirective {
  textCounter : number = 0;
  dropdownCounter : number = 0;
  constructor(private dragService: DragService, private el : ElementRef) {

  }

  @Input()
  set formDropTarget(options: DropTargetOptions) {
    if (options) {
      this.options = options;
    }
  }

  @Output('formDrop') drop = new EventEmitter();

  private options: DropTargetOptions = {};

  @HostListener('dragenter', ['$event'])
  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    const { zone = 'zone' } = this.options;

    if (this.dragService.accepts(zone)) {
       event.preventDefault();
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(event) {
    const data =  JSON.parse(event.dataTransfer.getData('Text'));
    let newName = this.setCounter(data);
    let newData = {'name': newName, 'type': data.type};
    this.dragService.publish(newData);
    this.drop.next(newData);
  }
  setCounter(data) {
    let newVal;
    let type = data.type;
    if (type=="text") {
      this.textCounter++;
      newVal = data.name + this.textCounter;
    } else if(type == "dropdown") {
      this.dropdownCounter++;
      newVal = data.name + this.dropdownCounter;
    }
    return newVal;
  }
}
export interface DropTargetOptions {
  zone?: string;
}