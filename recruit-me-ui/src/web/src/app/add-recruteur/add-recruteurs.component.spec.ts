import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecruteursComponent } from './add-recruteurs.component';

describe('AddRecruteursComponent', () => {
  let component: AddRecruteursComponent;
  let fixture: ComponentFixture<AddRecruteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecruteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecruteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
