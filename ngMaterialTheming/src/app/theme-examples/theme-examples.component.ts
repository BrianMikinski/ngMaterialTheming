import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-theme-examples',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCheckboxModule
  ],
  templateUrl: './theme-examples.component.html',
  styleUrl: './theme-examples.component.scss'
})
export class ThemeExamplesComponent {

}
