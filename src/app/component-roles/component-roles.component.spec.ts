import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRolesComponent } from './component-roles.component';

describe('ComponentRolesComponent', () => {
  let component: ComponentRolesComponent;
  let fixture: ComponentFixture<ComponentRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentRolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
