import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  mdPath: string = '/assets/markdown/introduce.md';

  constructor() { }

  ngOnInit() {
  }

  clickNav(event: any) {
    this.mdPath = `/assets/markdown/${event}.md`;
    q
  }

}
