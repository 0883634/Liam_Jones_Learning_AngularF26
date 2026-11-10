import { TestBed } from '@angular/core/testing';
import { LoadingIntercepter } from './loading-intercepter';

describe('LoadingIntercepter', () => {
  let service: LoadingIntercepter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingIntercepter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
