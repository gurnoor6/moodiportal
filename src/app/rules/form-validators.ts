import {AbstractControl,ValidatorFn} from '@angular/forms';

export function forbiddenNameValidator(forbiddenName : RegExp ): ValidatorFn{
	return (control:AbstractControl): {[key:string]:any}|null =>{
		const forbidden = forbiddenName.test(control.value) ;
		return forbidden ? null:{'forbiddenName':{value:control.value}};

	}
}