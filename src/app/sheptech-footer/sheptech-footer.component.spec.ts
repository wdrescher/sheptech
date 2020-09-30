import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheptechFooterComponent } from './sheptech-footer.component';

describe('SheptechFooterComponent', () => {
  let component: SheptechFooterComponent;
  let fixture: ComponentFixture<SheptechFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheptechFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheptechFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
