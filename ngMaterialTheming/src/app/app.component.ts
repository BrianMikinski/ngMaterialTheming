import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { FlexBoxComponent } from './flex-box/flex-box.component';
import { CssGridComponent } from './css-grid/css-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MainNavComponent,
    FlexBoxComponent,
    CssGridComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngMaterialTheming';

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
}
