import { Component, OnInit } from '@angular/core';
import { observable, autorun, computed } from 'mobx';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-mobx',
  templateUrl: './mobx.component.html',
  styleUrls: ['./mobx.component.scss']
})
export class MobxComponent implements OnInit {
  appState: any;
  store: any;
  index: any;
  plus: any;

  // @computed
  // get number() {
  //   return this.index
  // }

  constructor() {
    this.index = of(0);
    this.store = {
      value: '0',
      computedValue: observable.box('0')
    }

    autorun(() => {
      // this.plus = computed(() => this.number.pipe > 0);
      console.log(this.store.value);
      console.log(this.store.computedValue.get());
      // console.log(this.plus.get());
    });
  }

  action() {

    // this.index = this.index + 1;
    this.store.computedValue.set(this.index);
    console.log('');
    this.store.value = this.index;
  }

  ngOnInit() {

  }

  action1(params = this.index) {
    console.log(params);
  }

}
