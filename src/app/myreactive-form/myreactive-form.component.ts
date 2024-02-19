import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { JsonPipe } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';

interface State {
  name: string;
  code: string;
}
@Component({
  selector: 'app-myreactive-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    JsonPipe,
    DropdownModule,
    CommonModule,
  ],
  templateUrl: './myreactive-form.component.html',
  styleUrl: './myreactive-form.component.css',
})
export class MyreactiveFormComponent {
  public cities: State[] = [];
  public selectedCity: State | undefined;
  public inputStyle = 'box-shadow : 0px 0px 0px 2px #ff000023;';
  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  constructor(private fb: FormBuilder) {}

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.minLength(8)]],
    confirmPassword: [''],
    state: [<State>{name : "", code : ""}, [Validators.required]],
    address: this.fb.group({
      city: ['', [Validators.required]],
      zip: ['', [Validators.required, Validators.required]],
    }),
  });

  get userName() {
    return this.registerForm.get('username');
  }
  get pass() {
    return this.registerForm.get('password');
  }
  get cpass() {
    return this.registerForm.get('confirmPassword');
  }
  get City() {
    return this.registerForm.get('address.city');
  }
  get State() {
    return this.registerForm.get('state');
  }
  get Zip() {
    return this.registerForm.get('address.zip');
  }

  // registerForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl(''),
  //   }),
  // });

  loadData() {
    this.registerForm.patchValue({
      username: 'Bruce banner',
      password: 'test',
      confirmPassword: 'test',
      state: { name: 'London', code: 'LDN' },
      address: {
        city: 'Noida',
        zip: '208027',
      },
    });
  }
}
