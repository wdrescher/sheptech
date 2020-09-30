import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheptechNavigationButtonsComponent } from './sheptech-navigation-buttons.component';

describe('SheptechNavigationButtonsComponent', () => {
  let component: SheptechNavigationButtonsComponent;
  let fixture: ComponentFixture<SheptechNavigationButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheptechNavigationButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheptechNavigationButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
