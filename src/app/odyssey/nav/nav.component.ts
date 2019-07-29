import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  showKind: any = '';
  ifshow: boolean = false;
  navs: any;

  @Output() clickEmit: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
    this.navs = [{
      'id': 'introduce',
      'label': 'introduce'
    }, {
      'id': 'ui-widget',
      'label': 'ui-widget ',
      'elements': [
        {
          'id': 'button',
          'type': 'ui',
          'label': 'button'
        },
        {
          'id': 'icon',
          'type': 'ui',
          'label': 'icon'
        },
        {
          'id': 'progress',
          'type': 'ui',
          'label': 'progress'
        }
      ]
    }, {
      'id': 'base-widget',
      'label': 'base-widget ',
      'elements': [
        {
          'id': 'quickcash',
          'label': 'quickcash'
        },
        {
          'id': 'lop',
          'label': 'lop'
        }
      ]
    }]
  }

  expand(type: any) {
    this.showKind = type;
    this.ifshow = !this.ifshow;
  }

  choose(id: any) {
    this.clickEmit.emit(id);
  }

}
