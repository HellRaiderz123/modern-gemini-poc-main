import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenetNewsComponent } from './componenet-news.component';

describe('ComponenetNewsComponent', () => {
  let component: ComponenetNewsComponent;
  let fixture: ComponentFixture<ComponenetNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenetNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenetNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
