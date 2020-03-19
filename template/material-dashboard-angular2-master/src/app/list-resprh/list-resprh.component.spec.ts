import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResprhComponent } from './list-resprh.component';

describe('ListResprhComponent', () => {
  let component: ListResprhComponent;
  let fixture: ComponentFixture<ListResprhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListResprhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResprhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
