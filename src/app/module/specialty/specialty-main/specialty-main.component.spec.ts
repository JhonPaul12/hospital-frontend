import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtyMainComponent } from './specialty-main.component';

describe('SpecialtyMainComponent', () => {
  let component: SpecialtyMainComponent;
  let fixture: ComponentFixture<SpecialtyMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialtyMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialtyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
