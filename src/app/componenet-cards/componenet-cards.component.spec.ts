import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenetCardsComponent } from './componenet-cards.component';

describe('ComponenetCardsComponent', () => {
  let component: ComponenetCardsComponent;
  let fixture: ComponentFixture<ComponenetCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenetCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenetCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
