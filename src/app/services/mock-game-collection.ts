import { Service, signal, computed, effect, inject, Injectable } from '@angular/core';
import { Game } from '../shared/models/game';
import { APP_CONFIG } from '../shared/config/configuration';

@Service()
export class MockGameCollection {
  private config = inject(APP_CONFIG);

  private games = signal<Game[]>([
    {
      id: 1,
      name: 'Game 1',
      latestVer: 1.0,
      releaseDate: 'jan 1, 2025',
      localPlayers: 1,
      onlinePlayers: 4,
    },
    {
      id: 2,
      name: 'Game 2',
      latestVer: 2.0,
      releaseDate: 'jan 1, 2026',
      localPlayers: 2,
    },
  ]);

  gamesList = computed(() => {
    switch (this.config.defaultFilter) {
      case 'all':
        return this.games();
      case 'single':
        return this.games().filter((game) => game.localPlayers == 1);
      case 'duo':
        return this.games().filter((game) => game.localPlayers == 2);
      case 'squad':
        return this.games().filter((game) => game.localPlayers == 4);
      default:
        return this.games();
    }
  }); // i'll admit i got a little experimental here. hopefully i didnt do anything i wasnt supposed to.

  onlineGames = computed(() => this.gamesList().filter((game) => game.onlinePlayers !== undefined));

  onlineGameCount = computed(() => this.onlineGames().length);

  constructor() {
    effect(() => {
      console.log('Size of games collection: ', this.gamesList());
    });
  }
  removeGame(id: number): void {
    this.games.update((list) => list.filter((game) => game.id !== id));
  }

  addGame(newGame: Game): void {
    this.games.update((list) => [...list, newGame]);
  }
}
