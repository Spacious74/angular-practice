import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  // user_name: string = '';
  // e_mail: string = '';
  // u_password: string = '';
  show: boolean = false;
  // getUsername(name: string) {
  //   this.user_name = name;
  // }
  // getEmail(val: string) {
  //   this.e_mail = val;
  // }
  // getPassword(val: string) {
  //   this.u_password = val;
  //   const symbol: any = document.getElementById('symbol');
  //   const symCheck: any = document.getElementById('symCheck');
  //   const capital: any = document.getElementById('capital');
  //   const capCheck: any = document.getElementById('capCheck');
  //   const num: any = document.getElementById('num');
  //   const numCheck: any = document.getElementById('numCheck');
  //   const chars: any = document.getElementById('chars');
  //   const charCheck: any = document.getElementById('charCheck');

  //   // Minimum number of characters should be 8 checker
  //   if (this.u_password.length >= 8) {
  //     charCheck.style.display = 'inline';
  //     chars.style.color = '#00bf63';
  //   } else {
  //     charCheck.style.display = 'none';
  //     chars.style.color = '#bbbbbb';
  //   }

  //   // Number check
  //   if (/\d/.test(this.u_password)) {
  //     numCheck.style.display = 'inline';
  //     num.style.color = '#00bf63';
  //   } else {
  //     numCheck.style.display = 'none';
  //     num.style.color = '#bbbbbb';
  //   }

  //   // Capital letter check
  //   if (/[A-Z]/.test(this.u_password)) {
  //     capCheck.style.display = 'inline';
  //     capital.style.color = '#00bf63';
  //   } else {
  //     capCheck.style.display = 'none';
  //     capital.style.color = '#bbbbbb';
  //   }

  //   // Symbol check
  //   //eslint-disable-next-line
  //   if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(this.u_password)) {
  //     symCheck.style.display = 'inline';
  //     symbol.style.color = '#00bf63';
  //   } else {
  //     symCheck.style.display = 'none';
  //     symbol.style.color = '#bbbbbb';
  //   }
  // }

  showPassword(password: any, close: any, open: any) {
    open.style.display = 'none';
    close.style.display = 'block';
    password.type = 'text';
  }

  hidePassword(password: any, close: any, open: any) {
    open.style.display = 'block';
    close.style.display = 'none';
    password.type = 'password';
  }
}
