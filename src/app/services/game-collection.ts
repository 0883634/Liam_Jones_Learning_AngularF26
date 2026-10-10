import { Service, signal, computed, effect, inject } from '@angular/core';
import { Game } from '../shared/models/game';
import { APP_CONFIG } from '../shared/config/configuration';

@Service()
export class GameCollection {
  private config = inject(APP_CONFIG);

  private games = signal<Game[]>([
    {
      id: 1,
      name: 'Minecraft',
      latestVer: 1.21,
      releaseDate: 'nov 18, 2011',
      localPlayers: 4,
      onlinePlayers: 30,
    },
    {
      id: 2,
      name: 'Knack',
      latestVer: 1.0,
      releaseDate: 'nov 15, 2013',
      localPlayers: 2,
    },
    {
      id: 3,
      name: 'Bloodborne',
      latestVer: 1.09,
      releaseDate: 'mar 24, 2015',
      localPlayers: 1,
      onlinePlayers: 5,
    },
    {
      id: 4,
      name: 'Hollow Knight',
      latestVer: 1.5,
      releaseDate: 'feb 24, 2017',
      localPlayers: 1,
    },
    {
      id: 5,
      name: 'Darksouls',
      latestVer: 1.03,
      releaseDate: 'sept 22, 2011',
      localPlayers: 1,
      onlinePlayers: 6,
    },
    {
      id: 6,
      name: "No Man's Sky",
      latestVer: 4.7,
      releaseDate: 'aug 9, 2016',
      localPlayers: 1,
      onlinePlayers: 32,
    },
  ]);

  //gamesList = this.games.asReadonly();

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
