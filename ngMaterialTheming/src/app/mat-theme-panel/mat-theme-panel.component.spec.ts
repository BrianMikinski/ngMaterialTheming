import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatThemePanelComponent } from './mat-theme-panel.component';

describe('MatThemePanelComponent', () => {
  let component: MatThemePanelComponent;
  let fixture: ComponentFixture<MatThemePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatThemePanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatThemePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
