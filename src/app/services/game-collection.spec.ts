import { TestBed } from '@angular/core/testing';
import { GameCollection } from './game-collection';

describe('GameCollection', () => {
  let service: GameCollection;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameCollection);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
