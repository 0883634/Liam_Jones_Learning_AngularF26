import { Routes } from '@angular/router';
import { GameList } from './game-list/game-list'
import { GameDetail } from './game-detail/game-detail'
import { GameForm } from './game-form/game-form';
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
    component: GameForm,
  },
  {
    path: 'games/edit/:id',
    component: GameForm,
    canActivate: [editGuard],
  },
  {
    path: 'games/:id',
    component: GameDetail,
    resolve: {
      game: gameResolver,
    },
  },
];
