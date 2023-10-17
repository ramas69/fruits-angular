import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFruitReactiveComponent } from './create-fruit-reactive.component';

describe('CreateFruitReactiveComponent', () => {
  let component: CreateFruitReactiveComponent;
  let fixture: ComponentFixture<CreateFruitReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFruitReactiveComponent]
    });
    fixture = TestBed.createComponent(CreateFruitReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
