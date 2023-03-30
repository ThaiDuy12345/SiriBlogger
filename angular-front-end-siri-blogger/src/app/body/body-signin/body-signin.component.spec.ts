import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySigninComponent } from './body-signin.component';

describe('BodySigninComponent', () => {
  let component: BodySigninComponent;
  let fixture: ComponentFixture<BodySigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodySigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodySigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
