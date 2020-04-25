import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateResprhComponent } from './update-resprh.component';

describe('UpdateResprhComponent', () => {
  let component: UpdateResprhComponent;
  let fixture: ComponentFixture<UpdateResprhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateResprhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateResprhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
