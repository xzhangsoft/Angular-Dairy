import { Component, OnInit, DoBootstrap, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, Input } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { RootService } from 'src/app/root.service';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './../../animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [slideInAnimation]
})
export class LandingComponent implements OnInit, DoBootstrap, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() message: any;

  constructor(protected common: CommonService, protected root: RootService) { }

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnInit() {
    console.log(this.common.getMsg());
    // console.log(this.root.getPass());
    console.log(this.message);
    console.log('ngOnInit');
  }
  ngDoBootstrap(): void {
    console.log('ngDoBootstrap');
  }
  ngOnChanges(): void {
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

}
