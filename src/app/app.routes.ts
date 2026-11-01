import { Routes } from '@angular/router';
import { GameList } from './game-list/game-list'
import { GameDetail } from './game-detail/game-detail'
import { GameForm } from './game-form/game-form';

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
  },
  {
    path: 'games/:id',
    component: GameDetail,
  },
];
