import { Component, computed, inject, input, OnInit, OnDestroy } from '@angular/core';
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
export class GameDetail implements OnInit, OnDestroy {
  id = input.required();

  private gameCollection = inject(GameCollection);
  private timeOpened = 0;

  game = computed(() =>
    this.gameCollection.gamesList().find((game) => game.id === Number(this.id())),
  );

  constructor() {
  }
  ngOnInit(): void {
    const game = this.gameCollection.getGameById(Number(this.id()));
    this.timeOpened = Date.now();
    console.log('[lifecycle] opened: ' + game?.name + ' at ' + this.timeOpened);

  }

  ngOnDestroy(): void {
    const timeClosed = (Date.now() - this.timeOpened) / 1000;

    console.log("[lifecycle] closed at " + timeClosed + " seconds")
  }
}
