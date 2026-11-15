import { Component, computed, inject, input } from '@angular/core';
import { GameCollection } from '../services/game-collection';
import { Game } from '../shared/models/game';
import { DatePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { GenreLabelPipe } from '../pipes/genre-label-pipe';
@Component({
  imports: [DatePipe, UpperCasePipe, TitleCasePipe, GenreLabelPipe],
  selector: 'app-game-detail',
  styleUrl: './game-detail.css',
  templateUrl: './game-detail.html',
})
export class GameDetail {
  id = input.required();

  private gameCollection = inject(GameCollection);

  game = computed(() =>
    this.gameCollection.gamesList().find((game) => game.id === Number(this.id())),
  );
}
