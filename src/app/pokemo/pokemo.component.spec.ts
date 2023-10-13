import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemoComponent } from './pokemo.component';

describe('PokemoComponent', () => {
  let component: PokemoComponent;
  let fixture: ComponentFixture<PokemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemoComponent]
    });
    fixture = TestBed.createComponent(PokemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
