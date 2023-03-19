import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // @ViewChild('f') signupForm: NgForm;
  // loadedFeature = 'receipe';
  constructor(
    private authService: AuthService,
    private loggingService: LoggingService
  ) {}
  title = 'my-app';
  ngOnInit() {
    this.authService.autoLogin();
    this.loggingService.printLog('Hello from App Component ngOnInit');
  }
  // defaultQuestion = 'pet';
  // answer = '';
  // genders = ['male', 'female'];
  // forbiddenUsernames = ['sanu', 'john'];
  // user = {
  //   username: '',
  //   email: '',
  //   secret: '',
  //   answer: '',
  //   gender: '',
  // };
  // submitted = false;
  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }
  //suggestUsername() {
  //const suggestedName = 'superuser';
  // this.signupForm.setValue({
  //   userData: {
  //     username: suggestedName,
  //     email: '',
  //   },
  //   Secret: 'opt',
  //   queAns: '',
  //   gender: 'male',
  // });
  //   this.signupForm.form.patchValue({
  //     userData: {
  //       username: suggestedName,
  //     },
  //   });
  // }

  // onSubmit(form: NgForm) {
  // console.log(form);
  //   this.submitted = true;
  //   this.user.username = this.signupForm.value.userData.username;
  //   this.user.email = this.signupForm.value.userData.email;
  //   this.user.secret = this.signupForm.value.secret;
  //   this.user.answer = this.signupForm.value.queAns;
  //   this.user.gender = this.signupForm.value.gender;

  //   this.signupForm.reset();
  // }

  //==================Reactive Form==============================//
  // signupForm: FormGroup;

  // ngOnInit() {
  //   this.signupForm = new FormGroup({
  //     userData: new FormGroup({
  //       username: new FormControl(null, [
  //         Validators.required,
  //         this.forbiddenNames.bind(this),
  //       ]),
  //       email: new FormControl(
  //         null,
  //         [Validators.required, Validators.email],
  //         this.forbiddenEmails
  //       ),
  //     }),
  //     gender: new FormControl('male'),
  //     hobbies: new FormArray([]),
  //   });
  //   // this.signupForm.valueChanges.subscribe((value) => {
  //   //   console.log(value);
  //   // });
  //   this.signupForm.statusChanges.subscribe((status) => console.log(status));
  //   this.signupForm.patchValue({
  //     userData: { username: 'Amit', email: 'Amit@gmail.com' },
  //   });
  // }

  // onSubmit() {
  //   console.log(this.signupForm);
  //   this.signupForm.reset();
  // }

  // onAddHobby() {
  //   const control = new FormControl(null, Validators.required);
  //   (<FormArray>this.signupForm.get('hobbies')).push(control);
  // }

  // get controls() {
  //   return (this.signupForm.get('hobbies') as FormArray).controls;
  // }
  // //Reactive creating own custom validators
  // forbiddenNames(control: FormControl): { [s: string]: boolean } {
  //   if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
  //     return { nameIsForbidden: true };
  //   }
  //   return null;
  // }

  // forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
  //   const promise = new Promise<any>((resolve, reject) => {
  //     setTimeout(() => {
  //       if (control.value === 'test@test.com') {
  //         resolve({ emailForbidden: true });
  //       } else {
  //         resolve(null);
  //       }
  //     }, 1500);
  //   });
  //   return promise;
  // }
}
