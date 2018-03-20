import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonThemeComponent } from './person-theme.component';

describe('PersonThemeComponent', () => {
  let component: PersonThemeComponent;
  let fixture: ComponentFixture<PersonThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
