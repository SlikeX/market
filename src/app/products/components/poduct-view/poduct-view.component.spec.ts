import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoductViewComponent } from './poduct-view.component';

describe('PoductViewComponent', () => {
  let component: PoductViewComponent;
  let fixture: ComponentFixture<PoductViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoductViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
