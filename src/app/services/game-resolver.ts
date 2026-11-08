import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { GameCollection } from './game-collection';

export const gameResolver: ResolveFn<boolean> = (route) => {
  const gameCollection = inject(GameCollection);

  const id = Number(route.paramMap.get('id'));

  return gameCollection.getGameById(id) !== undefined;
};
