import { Component, inject } from '@angular/core';
import { GameCollection } from '../services/game-collection';
import {GameEvent, GameListItem} from '../game-list-item/game-list-item';


@Component({
  selector: 'app-game-list',
  styleUrl: './game-list.css',
  templateUrl: './game-list.html',
  imports: [GameListItem],
})
export class GameList {
  doGameEvent(event: GameEvent): void {
    console.log(event);
  }

  private gameCollection = inject(GameCollection);
  gameList = this.gameCollection.gamesList;
}
