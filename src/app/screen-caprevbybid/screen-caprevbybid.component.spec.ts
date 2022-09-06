import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenCaprevbybidComponent } from './screen-caprevbybid.component';

describe('ScreenCaprevbybidComponent', () => {
  let component: ScreenCaprevbybidComponent;
  let fixture: ComponentFixture<ScreenCaprevbybidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenCaprevbybidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenCaprevbybidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
