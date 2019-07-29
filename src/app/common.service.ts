import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  name: string;
  constructor() { }

  getMsg(): string {
    return this.name;
  }

  setMsg(name: string) {
    this.name = name;
  }
}
