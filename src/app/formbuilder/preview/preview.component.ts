import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DragService } from 'src/app/shared/services/drag-service.service';


@Component({
  selector: 'form-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  title = 'Preview';  
  closeResult: string;
  form: FormGroup;

  constructor( private modalService: NgbModal, private fb :FormBuilder, private dragService : DragService) {    
    this.form = this.fb.group({
      formControls: this.fb.array([]),
    });
    this.dragService.comps$.subscribe(
      data => {
        const ctrls = this.form.controls.formControls as FormArray;
        ctrls.insert(0, this.fb.group(data));
      }
    )
   }

  ngOnInit() {
  }
  
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
