import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-register',
  templateUrl: './reactive-register.component.html',
  styleUrls: ['./reactive-register.component.css']
})
export class ReactiveRegisterComponent implements OnInit {

  constructor() {
    this.formModel = new FormGroup({
      userName: new FormControl(),
      phone: new FormControl(),
      passGroup: new FormGroup({
        password: new FormControl(),
        comfirmPassword: new FormControl()
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
