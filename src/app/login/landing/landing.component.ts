import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { RootService } from 'src/app/root.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(protected common: CommonService,
    protected root: RootService,
    private router: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
    this.common.setMsg('maggie');
    // this.root.setPass('123');
    console.log(this.route.events);
    const id: Observable<string> = this.router.paramMap.pipe(map(p => p.get('id')));
    const user = this.router.data.pipe(map(d => d.user));

    this.router.paramMap.subscribe((params) => {
      console.log(params);

    })

    // const params = this.router.paramMap.pipe(switchMap((params: ParamMap) => {
    //   console.log(params);
    //   console.log(params.get('id'));
    // }))

    console.log(id);
    // console.log(url);
    console.log(user);
    // console.log('url:' + JSON.stringify(this.router.url));
    // console.log('data:' + JSON.stringify(this.router.data));
    // console.log('paramMap' + JSON.stringify(this.router.paramMap));
    // console.log('queryParamMap' + JSON.stringify(this.router.queryParamMap));
    // console.log('fragment' + JSON.stringify(this.router.fragment));
    // console.log('outlet' + JSON.stringify(this.router.outlet));
    // console.log('routeConfig' + JSON.stringify(this.router.routeConfig));
    // console.log('parent' + JSON.stringify(this.router.parent));
    // console.log('children' + JSON.stringify(this.router.children));
    // console.log('firstChild' + JSON.stringify(this.router.firstChild));

  }

}
