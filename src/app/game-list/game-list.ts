import { Component } from '@angular/core';
import { Game } from '../shared/models/game';
import {GameListItem} from '../game-list-item/game-list-item';


@Component({
  selector: 'app-game-list',
  styleUrl: './game-list.css',
  templateUrl: './game-list.html',
  imports: [GameListItem],
})
export class GameList {
  gameList: Game[] = [
    {
      id: 1,
      name: 'Minecraft',
      latestVer: 1.21,
      releaseDate: 'nov 18, 2011',
      localPlayers: 4,
      onlinePlayers: 30,
    },
    { id: 2, name: 'Knack', latestVer: 1.0, releaseDate: 'nov 15, 2013', localPlayers: 2 },
    {
      id: 3,
      name: 'Bloodborne',
      latestVer: 1.09,
      releaseDate: 'mar 24, 2015',
      localPlayers: 1,
      onlinePlayers: 5,
    },
    { id: 4, name: 'Hollow Knight', latestVer: 1.5, releaseDate: 'feb 24, 2017', localPlayers: 1 },
    {
      id: 1,
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
  ];
}
