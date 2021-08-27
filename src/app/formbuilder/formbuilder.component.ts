import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl  } from '@angular/forms';


@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css'],
})
export class FormbuilderComponent {
  draggableForm : FormGroup;
  droppableForm: FormGroup;
  cloneFormControl : FormControl; 

  constructor(private formBuilder: FormBuilder) {
  
  }
  ngOnInit() {
    this.draggableForm = new FormGroup(
      {
        name: new FormControl(null),
        email: new FormControl(null),
        country: new FormControl(null)
      })
      this.droppableForm = new FormGroup({});
       
  }
  
 
  

 
}
