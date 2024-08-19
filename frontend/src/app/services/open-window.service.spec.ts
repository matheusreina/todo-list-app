import { TestBed } from '@angular/core/testing';

import { OpenWindowService } from './open-window.service';

describe('OpenWindowService', () => {
  let service: OpenWindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenWindowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
