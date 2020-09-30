import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheptechContactFormComponent } from './sheptech-contact-form.component';

describe('SheptechContactFormComponent', () => {
  let component: SheptechContactFormComponent;
  let fixture: ComponentFixture<SheptechContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheptechContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheptechContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
