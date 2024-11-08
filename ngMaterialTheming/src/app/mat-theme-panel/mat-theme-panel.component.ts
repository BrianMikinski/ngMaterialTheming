import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-mat-theme-panel',
  standalone: true,
  imports: [
    MatCardModule,
    MatSliderModule,
    MatButtonModule
  ],
  templateUrl: './mat-theme-panel.component.html',
  styleUrl: './mat-theme-panel.component.scss'
})
export class MatThemePanelComponent {
  sliderForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.sliderForm = this.fb.group({
      roundness: [30],
      height: [50],
      textSize: [50]
    });

    this.sliderForm.valueChanges.subscribe(values => {
      console.log('Slider values:', values);
    });
  }
}
