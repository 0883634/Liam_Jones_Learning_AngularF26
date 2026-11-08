import { Component, input, output } from '@angular/core';
import { Game } from '../shared/models/game';
import { RouterLink } from '@angular/router';
import { GameCollection } from '../services/game-collection';

export interface GameEvent {
  id: number;
  action: 'completed';
}
@Component({
  imports: [RouterLink],
  selector: 'app-game-list-item',
  styleUrl: './game-list-item.css',
  templateUrl: './game-list-item.html',
})
export class GameListItem {
  game = input.required<Game>();
  gameEvent = output<GameEvent>();
  protected readonly GameCollection = GameCollection;
}
