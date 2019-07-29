import { Component, OnInit, Input } from '@angular/core';
import { computed } from 'mobx-angular';
import { autorun, observable } from 'mobx';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  @Input() value;
  applyValue: any;

  constructor() {
    this.value = '';
    // this.applyValue = this.value.observable.box('sss');
    autorun(() => {
      console.log(this.value);
    }
    );
  }

  ngOnInit() {
  }

}
