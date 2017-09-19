import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  //自定义校验器
  phoneValidator(control: FormControl): any {
    var myreq = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let valid = myreq.test(control.value);
    console.log("phone validate result:" + valid);
    return valid ? null:{phone:true};
  }

  phoneAsyncValidator(control: FormControl): any {
    var myreq = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let valid = myreq.test(control.value);
    console.log("phone validate result:" + valid);
    return Observable.of(valid ? null:{phone:true}).delay(5000);
  }

  passValidator(group:FormGroup):any{
    let password = group.get('password') as FormControl;
    let comfirmPassword = group.get('comfirmPassword') as FormControl;

    let valid:boolean = (password.value === comfirmPassword.value);
    console.log("password validate result:" + valid);
    return valid? null:{pass:{desc:"密码和确认密码不匹配"}}
  }

  private formModel: FormGroup;
  constructor(formBuilder: FormBuilder) {
    this.formModel = formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['',[this.phoneValidator],this.phoneAsyncValidator],
      // phone: ['',[this.phoneValidator]],
      passGroup: formBuilder.group({
        password: ['',[Validators.minLength(6)]],
        comfirmPassword: ['']
      },{validator:this.passValidator}),
    });
  }

  onSubmit() {
    let isValid: boolean = this.formModel.get("userName").valid;
    let errors: any = this.formModel.get("userName").errors;
    console.log(isValid);
    console.log(JSON.stringify(errors));
    console.log(this.formModel.value);

    if(this.formModel.valid){
      console.log(this.formModel.value);
    }
  }

  ngOnInit() {
  }

}
