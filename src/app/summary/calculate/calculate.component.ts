import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss']
})
export class CalculateComponent implements OnInit {
  applyValue: any = 'im apply value';

  constructor() { }

  ngOnInit() {
  }

  landingChange(event) {
    console.log(this.applyValue);
    this.applyValue = event.value;
  }

}
