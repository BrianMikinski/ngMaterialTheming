import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Observable, map, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatButton,
    CommonModule,
    MatIconModule,
    RouterLink],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss'
})
export class MainNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    options = this._formBuilder.group({
      bottom: 0,
      fixed: false,
      top: 0,
  });

  constructor(private breakpointObserver: BreakpointObserver, private _formBuilder: FormBuilder) { }
  
  ngOnInit(): void {

  }



  toggleTheme() {
    // add light-theme or dark-theme class to body
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    }
  }

  onThemeChange(theme: string): void {
    switch (theme) {
      case 'light':
        document.body.classList.remove('dark-theme');
        document.body.classList.remove('custom-theme');
        document.body.classList.add('light-theme');
        break;
      case 'dark':
        document.body.classList.remove('light-theme');
        document.body.classList.remove('custom-theme');
        document.body.classList.add('dark-theme');
        break;
      case 'custom':
        document.body.classList.remove('light-theme');
        document.body.classList.remove('dark-theme');
        document.body.classList.add('custom-theme');
        break;
      default:
        break;
    }
  }
}
