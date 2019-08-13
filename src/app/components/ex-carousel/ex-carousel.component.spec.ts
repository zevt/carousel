import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExCarouselComponent } from './ex-carousel.component';

describe('ExCarouselComponent', () => {
  let component: ExCarouselComponent;
  let fixture: ComponentFixture<ExCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
