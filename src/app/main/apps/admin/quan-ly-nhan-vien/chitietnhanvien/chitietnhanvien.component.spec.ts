import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietnhanvienComponent } from './chitietnhanvien.component';

describe('ChitietnhanvienComponent', () => {
  let component: ChitietnhanvienComponent;
  let fixture: ComponentFixture<ChitietnhanvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitietnhanvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietnhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
