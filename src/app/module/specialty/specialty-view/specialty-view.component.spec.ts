import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtyViewComponent } from './specialty-view.component';

describe('SpecialtyViewComponent', () => {
  let component: SpecialtyViewComponent;
  let fixture: ComponentFixture<SpecialtyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialtyViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialtyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
