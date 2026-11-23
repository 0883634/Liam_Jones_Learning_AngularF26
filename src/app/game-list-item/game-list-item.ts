import { Component, input, output } from '@angular/core';
import { Game } from '../shared/models/game';
import { RouterLink } from '@angular/router';
import { GameCollection } from '../services/game-collection';
import { TitleCasePipe } from '@angular/common';
import { TruncatePipe } from '../pipes/truncate-pipe';
import { Highlight } from '../directives/highlight';
import { AppConfirm } from '../directives/app-confirm';

export interface GameEvent {
  id: number;
  action: 'completed';
}
@Component({
  standalone: true,
  imports: [RouterLink, TitleCasePipe, TruncatePipe, Highlight, AppConfirm],
  selector: 'app-game-list-item',
  styleUrl: './game-list-item.css',
  templateUrl: './game-list-item.html',

  hostDirectives: [
    {
      directive: Highlight,
      inputs: ['appHighlight: highlightColor'],
    },
  ],
})
export class GameListItem {
  game = input.required<Game>();
  gameEvent = output<GameEvent>();
  protected readonly GameCollection = GameCollection;
}
