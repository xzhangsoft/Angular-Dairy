import { Injectable } from '@angular/core';

@Injectable()
export class RootService {

  pass: string;

  constructor() { }

  setPass(pass: string) {
    this.pass = pass;
  }

  getPass() {
    return this.pass;
  }
}
