import {Injectable, ElementRef} from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({
  "providedIn": "root"
})
export class DragService {
  private zone: string;
  private targetEle: ElementRef
  private comps = new ReplaySubject();  
  comps$ = this.comps.asObservable();
  startDrag(zone: string) {
    this.zone = zone;
  }
  getTargetDragElement() {
    return this.targetEle;
  }
  publish(data : any) {
    this.comps.next(data);
  }
  accepts(zone: string): boolean {
    return zone == this.zone;
  }
}