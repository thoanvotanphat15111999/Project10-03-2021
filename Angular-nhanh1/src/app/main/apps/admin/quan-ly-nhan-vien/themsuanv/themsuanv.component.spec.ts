import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemsuanvComponent } from './themsuanv.component';

describe('ThemsuanvComponent', () => {
  let component: ThemsuanvComponent;
  let fixture: ComponentFixture<ThemsuanvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemsuanvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemsuanvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
