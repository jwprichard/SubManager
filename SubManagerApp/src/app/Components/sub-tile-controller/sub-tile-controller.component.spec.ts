import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTileControllerComponent } from './sub-tile-controller.component';

describe('SubTileControllerComponent', () => {
  let component: SubTileControllerComponent;
  let fixture: ComponentFixture<SubTileControllerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubTileControllerComponent]
    });
    fixture = TestBed.createComponent(SubTileControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
