import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameCollection } from '../services/game-collection';
import { Saved } from '../services/saved';
@Component({
  imports: [RouterLink],
  selector: 'app-saved-game-list',
  styleUrl: './saved-game-list.css',
  templateUrl: './saved-game-list.html',
})
export class SavedGameList {
  private gameCollection = inject(GameCollection);
  protected saved = inject(Saved);

  savedGames = computed(() =>
    this.gameCollection.gamesList().filter((game) => this.saved.ids().includes(game.id)),
  );
}
