import { FormControl, FormGroup } from "@angular/forms";


 //自定义校验器
 export function phoneValidator(control: FormControl): any {
    var myreq = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let valid = myreq.test(control.value);
    console.log("phone validate result:" + valid);
    return valid ? null:{phone:true};
  }

  export function passValidator(group:FormGroup):any{
    let password = group.get('password') as FormControl;
    let comfirmPassword = group.get('comfirmPassword') as FormControl;

    let valid:boolean = (password.value === comfirmPassword.value);
    console.log("password validate result:" + valid);
    return valid? null:{pass:true}
  }