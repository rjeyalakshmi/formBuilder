import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  formControls: any;

  constructor() {
   
  }

  ngOnInit() {
    this.formControls = [
      {
        "name": "Text Box",
        'type': "text",
      },
      {
        "name": "Dropdown",
        "type": "dropdown",
      }
      
      ]
  }

}
