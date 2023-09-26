import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPositionComponent } from './my-position.component';

describe('MyPositionComponent', () => {
  let component: MyPositionComponent;
  let fixture: ComponentFixture<MyPositionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPositionComponent]
    });
    fixture = TestBed.createComponent(MyPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
