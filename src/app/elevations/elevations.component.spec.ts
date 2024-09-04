import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevationsComponent } from './elevations.component';

describe('ElevationsComponent', () => {
  let component: ElevationsComponent;
  let fixture: ComponentFixture<ElevationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElevationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElevationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
