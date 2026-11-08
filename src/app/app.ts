import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Game } from './shared/models/game';
import { GameList } from './game-list/game-list';
import { Navbar } from './navbar/navbar';

@Component({
  imports: [RouterOutlet, GameList, Navbar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

}
