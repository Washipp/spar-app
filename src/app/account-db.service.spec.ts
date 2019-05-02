import { TestBed } from '@angular/core/testing';

import { AccountDbService } from './account-db.service';

describe('AccountDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountDbService = TestBed.get(AccountDbService);
    expect(service).toBeTruthy();
  });
});
