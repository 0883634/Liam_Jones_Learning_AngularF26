import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SavedGameList } from './saved-game-list';

describe('SavedGameList', () => {
  let component: SavedGameList;
  let fixture: ComponentFixture<SavedGameList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedGameList],
    }).compileComponents();

    fixture = TestBed.createComponent(SavedGameList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
