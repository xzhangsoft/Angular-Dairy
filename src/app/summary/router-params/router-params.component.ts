import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-router-params',
  templateUrl: './router-params.component.html',
  styleUrls: ['./router-params.component.scss']
})
export class RouterParamsComponent implements OnInit {
  paramValue$: Observable<any>;
  queryParamValue$: Observable<any>;
  paramId: Observable<any>;
  queryParamId: Observable<any>;
  paramValue1$: Observable<any>;
  paramData$: Observable<any>;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    //如果检测到路由相同而参数不同时，是不会重新初始化组件的

    this.paramData$ = this.route.data.pipe(switchMap((params: ParamMap) => {
      return of(params);
    }));

    this.paramData$.subscribe(res => {
      console.log("type in data is", res.type)
    })

    this.paramValue$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.paramId = of(params.get('id'));
      })
    );
    this.paramValue$.subscribe(res => { console.log("id in param is", res) })

    this.paramValue1$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.paramId = of(params.get('name'));
      })
    );

    this.paramValue1$.subscribe(res => { console.log("name in param is", res) })

    this.queryParamValue$ = this.route.queryParamMap.pipe(
      switchMap((params: ParamMap) => {
        return this.queryParamId = of(params.get('id'));
      })
    );
    this.queryParamValue$.subscribe(res => { console.log("id in queryParam is", res) });
  }

  changeParams() {
    this.router.navigate(['/summary/router', 2]);
  }
  changeQueryParams() {
    this.router.navigate(['/summary/router', 3], {
      queryParams: {
        id: 'bbb',
      }
    });
  }
  keepQueryParams() {
    this.router.navigate(['/summary/router', 5], {
      queryParamsHandling: 'preserve',
    });
  }

}
