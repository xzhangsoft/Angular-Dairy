import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck, OnInit {
  title = 'latest';
  inner: any;
  dangerousUrl: string;
  trustedUrl: any;

  constructor(private router: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private cookieService: CookieService) {
    this.inner = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
  }

  ngOnInit(): void {

    const time = 2 * 60 * 60 * 1000;
    const timer = new Date('2019-07-20');

    const cookieOptions = {
      path: '',
      domain: '',
      expires: timer,
      secure: true,
      httpOnly: true,
      storeUnencoded: true
    }
    this.cookieService.put('name', 'maggie @3', {
      path: '',
      domain: '',
      expires: timer,
      secure: false,
      httpOnly: true,
      storeUnencoded: false
    });

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  ngDoCheck() {

  }


}
