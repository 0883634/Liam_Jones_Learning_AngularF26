import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genreLabel',
})
export class GenreLabelPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) {
      return 'Unknown Genre';
    }

    const genres: Record<string, string> = {
      MMORPG: 'Massively Multiplayer Online Role-Playing Game',
      ARPG: 'Action Role-Playing Game',
      MMOARPG: 'Massively Multiplayer Online Action Role-Playing Game',
      RPG: 'Role-Playing Game',
    };

    return genres[value] ?? value;
  }
}
