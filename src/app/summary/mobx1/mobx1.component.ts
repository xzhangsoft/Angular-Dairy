import { Component, OnInit } from '@angular/core';
import { observable, computed } from "mobx";

@Component({
  selector: 'app-mobx1',
  templateUrl: './mobx1.component.html',
  styleUrls: ['./mobx1.component.scss']
})
export class Mobx1Component implements OnInit {
  // @observable price = 0;
  // @observable amount = 1;

  price1 = 10;
  amount1 = 11;

  // @computed get total() {
  //   return this.price * this.amount;
  // }

  get total1() {
    return this.price1 * this.amount1;
  }

  constructor() { }

  ngOnInit() {

  }
  click() {
    // this.price = 2;
    this.price1 = 2;
  }

}
