import { TestBed } from '@angular/core/testing';

import { SheptechContactServiceService } from './sheptech-contact-service.service';

describe('SheptechContactServiceService', () => {
  let service: SheptechContactServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SheptechContactServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
