import { Component, input } from '@angular/core';
import { Game } from '../shared/models/game';

@Component({
  imports: [],
  selector: 'app-game-list-item',
  styleUrl: './game-list-item.css',
  templateUrl: './game-list-item.html',
})
export class GameListItem {
  game = input.required<Game>();
}
