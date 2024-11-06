import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeExamplesComponent } from './theme-examples.component';

describe('ThemeExamplesComponent', () => {
  let component: ThemeExamplesComponent;
  let fixture: ComponentFixture<ThemeExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeExamplesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemeExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
