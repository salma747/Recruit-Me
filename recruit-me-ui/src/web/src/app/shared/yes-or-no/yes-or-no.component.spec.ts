import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YesOrNOComponent } from './yes-or-no.component';

describe('YesOrNOComponent', () => {
  let component: YesOrNOComponent;
  let fixture: ComponentFixture<YesOrNOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YesOrNOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesOrNOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
