import { Component, effect, inject, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GameCollection } from '../services/game-collection';


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
    name: ['', [Validators.required, Validators.minLength(2)]],
    latestVer: [1.0],
    releaseDate: [''],
    localPlayers: [1, Validators.required],
    onlinePlayers: [0],
  });

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
          latestVer: game.latestVer,
          releaseDate: game.releaseDate,
          localPlayers: game.localPlayers,
          onlinePlayers: game.onlinePlayers ?? 0,
        });
      }
    });
  }

  onSubmit(): void {
    console.log('submit clicked');
    console.log('valid?', this.gameForm.valid);
    if (this.gameForm.invalid) {
      return;
    }

    const value = this.gameForm.getRawValue();

    this.gameCollection.addGame({
      id: Date.now(),
      ...value,
    });

    this.gameForm.reset({
      latestVer: 1.0,
      localPlayers: 1,
      onlinePlayers: 0,
    });
  }
}
