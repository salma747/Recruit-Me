import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResprhComponent } from './add-resprh.component';

describe('AddResprhComponent', () => {
  let component: AddResprhComponent;
  let fixture: ComponentFixture<AddResprhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResprhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResprhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
