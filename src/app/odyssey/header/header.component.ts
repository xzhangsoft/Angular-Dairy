import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  navigationList: any;

  animate = false;

  disBlur = false;

  ngOnInit() {
    this.getNavigationListValue();
  }

  animation() {
    console.log(this.animate);
    this.animate = true;
  }

  blurrr() {
    this.animate = false;
  }

  getClasses() {
    const cls = {
      'search': true,
      'animation-class': this.animate,
    }
    return cls;
  }

  getNavigationListValue() {
    this.navigationList = [
      {
        'text': '特性',
        'link': 'http://www.baidu.com'
      },
      {
        'text': '文档',
        'link': ''
      },
      {
        'text': '资源',
        'link': ''
      },
      {
        'text': '会议',
        'link': ''
      },
      {
        'text': '博客',
        'link': ''
      },
      {
        'text': '关于中文版',
        'link': ''
      }
    ]

  }
}
