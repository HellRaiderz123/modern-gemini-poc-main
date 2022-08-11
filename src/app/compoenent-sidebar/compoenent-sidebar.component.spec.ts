import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoenentSidebarComponent } from './compoenent-sidebar.component';

describe('CompoenentSidebarComponent', () => {
  let component: CompoenentSidebarComponent;
  let fixture: ComponentFixture<CompoenentSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoenentSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoenentSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
