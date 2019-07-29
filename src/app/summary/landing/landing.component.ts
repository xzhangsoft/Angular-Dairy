import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription, ObservableInput } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  value = 'hi im 15 years old';
  observerable: ObservableInput<any> = [1, 2, 3];

  @Output() action = new EventEmitter();

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {

    const pipeTest = this.router.paramMap.pipe(switchMap(
      (params: ParamMap) => {

        return params.get('id');
      }));

    pipeTest.subscribe((a) => {
      console.log(a);
    })

    this.router.paramMap.pipe(map(p => { this.showParams(p.get('id')); }));

    const id1: Subscription = this.router.paramMap.subscribe((params) => {
      console.log(params['params'].id);
    });

    const id2: Subscription = this.router.queryParamMap.subscribe((params) => {
      console.log(params);
    })
  }

  showParams(params) {
    console.log('console.log(params);');
    console.log(params);
  }

  click() {
    this.action.emit({ value: 'hi now im 18 years old' });
  }

}
