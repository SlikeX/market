import {TestBed} from '@angular/core/testing';

import {GeneratorFactory} from './generator.factory';

describe('GeneratorFactoryService', () => {
  let service: GeneratorFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratorFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
