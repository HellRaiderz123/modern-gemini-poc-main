import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentUiErrorComponent } from './component-ui-error.component';

describe('ComponentUiErrorComponent', () => {
  let component: ComponentUiErrorComponent;
  let fixture: ComponentFixture<ComponentUiErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentUiErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentUiErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
