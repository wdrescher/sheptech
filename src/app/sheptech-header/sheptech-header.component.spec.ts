import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheptechHeaderComponent } from './sheptech-header.component';

describe('SheptechHeaderComponent', () => {
  let component: SheptechHeaderComponent;
  let fixture: ComponentFixture<SheptechHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheptechHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheptechHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
