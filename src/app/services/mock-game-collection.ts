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
      releaseDate: 'jan 1, 2025',
      platform: '',
      genre: '',
      publisher: '',
      developer: '',
    },
    {
      id: 2,
      name: 'Game 2',
      releaseDate: 'jan 1, 2026',
      platform: '',
      genre: '',
      publisher: '',
      developer: '',
    },
  ]);

  gamesList = computed(() => {
    switch (this.config.defaultFilter) {
      case 'all':
        return this.games();
      default:
        return this.games();
    }
  });

  //onlineGames = computed(() => this.gamesList().filter((game) => game.onlinePlayers !== undefined));

  //onlineGameCount = computed(() => this.onlineGames().length);

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
