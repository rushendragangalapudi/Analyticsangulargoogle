import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
// import { Title }     from '@angular/platform-browser';
declare var gtag;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'analyticsangulargoogle';
  constructor(router : Router
    // private titleService: Title
    ) {
    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
    navEndEvents.subscribe((event: NavigationEnd) => {
      gtag('config', 'UA-153205872-2', {
        'page_path':  event.urlAfterRedirects
      });
    });
  }
  public setTitle( newTitle: string) {
    // this.titleService.setTitle( newTitle );
  }
}
