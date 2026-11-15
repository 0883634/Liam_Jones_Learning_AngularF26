import { Component, input, output } from '@angular/core';
import { Game } from '../shared/models/game';
import { RouterLink } from '@angular/router';
import { GameCollection } from '../services/game-collection';
import { TitleCasePipe } from '@angular/common';

export interface GameEvent {
  id: number;
  action: 'completed';
}
@Component({
  imports: [RouterLink, TitleCasePipe],
  selector: 'app-game-list-item',
  styleUrl: './game-list-item.css',
  templateUrl: './game-list-item.html',
})
export class GameListItem {
  game = input.required<Game>();
  gameEvent = output<GameEvent>();
  protected readonly GameCollection = GameCollection;
}
