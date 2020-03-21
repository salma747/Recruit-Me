import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecruteursComponent } from './list-recruteurs.component';

describe('ListRecruteursComponent', () => {
  let component: ListRecruteursComponent;
  let fixture: ComponentFixture<ListRecruteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRecruteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecruteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
