import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableItemsComponent } from './draggable-items.component';

describe('DraggableItemsComponent', () => {
  let component: DraggableItemsComponent;
  let fixture: ComponentFixture<DraggableItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggableItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
