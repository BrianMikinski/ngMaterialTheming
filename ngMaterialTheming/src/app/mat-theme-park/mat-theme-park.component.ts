import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatThemePanelComponent } from '../mat-theme-panel/mat-theme-panel.component';

@Component({
  selector: 'app-mat-theme-park',
  standalone: true,
  imports: [
    MatThemePanelComponent
  ],
  templateUrl: './mat-theme-park.component.html',
  styleUrl: './mat-theme-park.component.scss'
})
export class MatThemeParkComponent {

}
