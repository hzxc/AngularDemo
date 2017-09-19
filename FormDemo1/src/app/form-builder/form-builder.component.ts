import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  constructor(formBuilder:FormBuilder) {
    this.formModel = formBuilder.group({
      userName: [''],
      phone: [''],
      passGroup: formBuilder.group({
        password: [''],
        comfirmPassword: ['']
      }),
    });
  }

  private formModel: FormGroup;
  onSubmit(){
    console.log(this.formModel.value);
  }

  ngOnInit() {
  }

}
