import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatThemeParkComponent } from './mat-theme-park.component';

describe('MatThemeParkComponent', () => {
  let component: MatThemeParkComponent;
  let fixture: ComponentFixture<MatThemeParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatThemeParkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatThemeParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
