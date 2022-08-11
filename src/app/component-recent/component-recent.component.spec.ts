import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRecentComponent } from './component-recent.component';

describe('ComponentRecentComponent', () => {
  let component: ComponentRecentComponent;
  let fixture: ComponentFixture<ComponentRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentRecentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
