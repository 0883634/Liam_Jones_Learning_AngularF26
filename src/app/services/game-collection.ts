import { Service, signal, computed, effect, inject, Injectable } from '@angular/core';
import { Game } from '../shared/models/game';
import { APP_CONFIG } from '../shared/config/configuration';
import { HttpClient } from '@angular/common/http';

@Service()
export class GameCollection {
  private http = inject(HttpClient);
  private config = inject(APP_CONFIG);

  private games = signal<Game[]>([]);

  isLoading = signal(false);
  error = signal<string | null>(null);

  gamesList = computed(() => {
    switch (this.config.defaultFilter) {
      case 'all':
        return this.games();
      default:
        return this.games();
    }
  }); // im probably gonna have to come back and add stuff back to this.

  //onlineGames = computed(() => this.gamesList().filter((game) => game.onlinePlayers !== undefined));

  //onlineGameCount = computed(() => this.onlineGames().length);
  constructor() {
    this.load();

    effect(() => {
      console.log('Size of games collection: ', this.gamesList());
    });
  }

  load() {
    this.isLoading.set(true);

    this.http.get<any[]>(`${this.config.apiBaseUrl}/games`).subscribe({
      next: (list) => {
        this.games.set(list.map((game) => ({
            id: game.id,
            name: game.title,
            releaseDate: game.release_date,
            platform: game.platform,
            genre: game.genre,
            publisher: game.publisher,
            developer: game.developer,
          })),
        );

        this.isLoading.set(false);
      },
      error: () => {
        this.error.set('Could not load data.');
        this.isLoading.set(false);
      },
    });
  }

  removeGame(id: number): void {
    this.games.update((list) => list.filter((game) => game.id !== id));
  }

  getGameById(id: number): Game | undefined {
    return this.games().find((game) => game.id === id);
  }

  addGame(newGame: Game): void {
    this.games.update((list) => [...list, newGame]);
  }

  updateGame(updatedGame: Game): void {
    this.games.update((list) =>
      list.map((game) => (game.id === updatedGame.id ? updatedGame : game)),
    );
  }
}
