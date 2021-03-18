import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuanComponent } from './duan.component';

describe('DuanComponent', () => {
  let component: DuanComponent;
  let fixture: ComponentFixture<DuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
