import { TestBed } from '@angular/core/testing';

import { GithubInfoService } from './github-info.service';

describe('GithubInfoService', () => {
  let service: GithubInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
