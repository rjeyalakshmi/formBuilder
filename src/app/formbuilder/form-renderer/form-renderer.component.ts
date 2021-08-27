import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray  } from '@angular/forms';
  
@Component({
  selector: 'form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.css']
})
export class FormRendererComponent implements OnInit {
  //formControls : Array<any> = [];
  form: FormGroup;
   constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      dropControls: this.fb.array([]),
    });
   }

  ngOnInit() {
    
      
    
  }
  
  onDrop(data: any) {
    const ctrls = this.form.controls.dropControls as FormArray;
    ctrls.insert(0, this.fb.group(data));

  }  
  
}
