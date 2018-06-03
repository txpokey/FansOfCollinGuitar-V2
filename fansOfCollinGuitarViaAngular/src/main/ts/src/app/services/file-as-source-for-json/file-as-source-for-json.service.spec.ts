import { TestBed, inject } from '@angular/core/testing';

import { FileAsSourceForJsonService } from './file-as-source-for-json.service';

describe('FileAsSourceForJsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileAsSourceForJsonService]
    });
  });

  it('should be created', inject([FileAsSourceForJsonService], (service: FileAsSourceForJsonService) => {
    expect(service).toBeTruthy();
  }));
});
