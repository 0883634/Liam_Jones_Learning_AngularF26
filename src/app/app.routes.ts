import { Routes } from '@angular/router';
import { GameList } from './game-list/game-list'
import { GameDetail } from './game-detail/game-detail'
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
    path: 'games/:id',
    component: GameDetail,
  },
];
