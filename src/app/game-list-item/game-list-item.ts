import { Component, input, output } from '@angular/core';
import { Game } from '../shared/models/game';
export interface GameEvent {
  id: number;
  action: 'completed';
}
@Component({
  imports: [],
  selector: 'app-game-list-item',
  styleUrl: './game-list-item.css',
  templateUrl: './game-list-item.html',
})
export class GameListItem {
  game = input.required<Game>();
  gameEvent = output<GameEvent>();
}
