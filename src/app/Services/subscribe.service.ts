import { Injectable } from '@angular/core';

@Injectable()
export class SubscribeService {
  constructor() {}
  onSubscribe() {
    alert('Thanks for subscribing :)');
  }
}
