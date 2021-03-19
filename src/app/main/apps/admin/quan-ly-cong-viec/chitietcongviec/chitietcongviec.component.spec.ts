import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietcongviecComponent } from './chitietcongviec.component';

describe('ChitietcongviecComponent', () => {
  let component: ChitietcongviecComponent;
  let fixture: ComponentFixture<ChitietcongviecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitietcongviecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietcongviecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
