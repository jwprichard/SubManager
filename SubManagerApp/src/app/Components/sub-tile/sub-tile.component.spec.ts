import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTileComponent } from './sub-tile.component';

describe('SubTileComponent', () => {
  let component: SubTileComponent;
  let fixture: ComponentFixture<SubTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubTileComponent]
    });
    fixture = TestBed.createComponent(SubTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
