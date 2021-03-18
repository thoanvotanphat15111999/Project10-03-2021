import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitiettaikhoanComponent } from './chitiettaikhoan.component';

describe('ChitiettaikhoanComponent', () => {
  let component: ChitiettaikhoanComponent;
  let fixture: ComponentFixture<ChitiettaikhoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitiettaikhoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitiettaikhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
