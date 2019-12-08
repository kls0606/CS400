import { TestBed } from '@angular/core/testing';

import { CurrEX } from './exService';

describe('currEX', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrEX = TestBed.get(CurrEX);
    expect(service).toBeTruthy();
  });
});
