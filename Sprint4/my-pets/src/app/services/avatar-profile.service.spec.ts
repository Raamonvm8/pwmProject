import { TestBed } from '@angular/core/testing';

import { AvatarProfileService } from './avatar-profile.service';

describe('AvatarProfileService', () => {
  let service: AvatarProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvatarProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
