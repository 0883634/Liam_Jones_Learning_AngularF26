import { Routes } from '@angular/router';
import { GameList } from './game-list/game-list';
import { editGuard } from './services/edit-guard';
import { gameResolver } from './services/game-resolver';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/games',
    pathMatch: 'full',
  },
  {
    path: 'games',
    component: GameList,
  },
  {
    path: 'games/new',
    loadComponent: () => import('./game-form/game-form').then((m) => m.GameForm),
  },
  {
    path: 'games/edit/:id',
    canActivate: [editGuard],
    loadComponent: () => import('./game-form/game-form').then((m) => m.GameForm),
  },
  {
    path: 'games/:id',
    loadComponent: () => import('./game-detail/game-detail').then((m) => m.GameDetail),
    resolve: {
      game: gameResolver,
    },
  },
];
