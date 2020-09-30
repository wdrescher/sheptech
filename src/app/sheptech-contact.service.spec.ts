import { TestBed } from '@angular/core/testing';

import { SheptechContactService } from './sheptech-contact.service';

describe('SheptechContactServiceService', () => {
  let service: SheptechContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SheptechContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
