import { TestBed } from '@angular/core/testing';

import { Navbar.ServiceService } from './navbar.service.service';

describe('Navbar.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Navbar.ServiceService = TestBed.get(Navbar.ServiceService);
    expect(service).toBeTruthy();
  });
});
