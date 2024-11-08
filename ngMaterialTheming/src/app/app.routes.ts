import { Routes } from '@angular/router';
import { ThemeExamplesComponent } from './theme-examples/theme-examples.component';
import { FlexBoxComponent } from './flex-box/flex-box.component';
import { CssGridComponent } from './css-grid/css-grid.component';
import { MatThemeParkComponent } from './mat-theme-park/mat-theme-park.component';

export const routes: Routes = [
    { path: '', redirectTo: '/theme', pathMatch: 'full' },
    { path: 'theme', component: ThemeExamplesComponent },
    { path: 'flexbox', component: FlexBoxComponent },
    { path: 'cssgrid', component: CssGridComponent },
    { path: 'themepark', component: MatThemeParkComponent }
];
