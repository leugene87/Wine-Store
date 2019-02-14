import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    router: string;
  authority: string;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  constructor(private apComponent: AppComponent, private aRouter: Router, private breakpointObserver: BreakpointObserver) {
      this.router = aRouter.url;
  }
  ngOnInit() {
      this.authority = this.apComponent.authority;

}



}
