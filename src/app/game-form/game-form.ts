import { Component, effect, inject, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GameCollection } from '../services/game-collection';
import { whiteSpaceValidator } from '../services/validators/whiteSpace-validator';
import { leagueOfLegendsValidator } from '../services/validators/leagueOfLegends-validator';
import { playerValidator } from '../services/validators/player-validator';


@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-game-form',
  styleUrl: './game-form.css',
  templateUrl: './game-form.html',
})
export class GameForm {
  id = input<number>();
  private fb = inject(FormBuilder);
  private gameCollection = inject(GameCollection);

  gameForm = this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(2), whiteSpaceValidator, leagueOfLegendsValidator]],
      releaseDate: [''],
      platform: [''],
      genre: [''],
      publisher: [''],
      developer: ['']
  },
    {
      //validators: playerValidator
    }
  );

  constructor() {
    effect(() => {
      const id = this.id();

      if (id === undefined) {
        return;
      }

      const game = this.gameCollection.getGameById(Number(id));

      if (game) {
        this.gameForm.patchValue({
          name: game.name,
          releaseDate: game.releaseDate,
          platform: game.platform,
          genre: game.genre,
          publisher: game.publisher,
          developer: game.developer
        });
      }
    });
  }

  onSubmit(): void {
    const value = this.gameForm.getRawValue();

    if (this.id() !== undefined) {
      this.gameCollection.updateGame({
        id: Number(this.id()),
        ...value,
      });
    } else {
      this.gameCollection.addGame({
        id: Date.now(),
        ...value,
      });
      this.gameForm.reset({
        name: '',
        releaseDate: '',
        platform: '',
        genre: '',
        publisher: '',
        developer: ''
      });

    }
  }
}
