import { Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  darkMode = signal(this.loadTheme());

  constructor() {
    effect(() => {
      try {
        localStorage.setItem('game-library.theme', JSON.stringify(this.darkMode()));
      } catch {}
    });
  }

  toggleTheme(): void {
    this.darkMode.update((mode) => !mode);
  }

  private loadTheme(): boolean {
    try {
      return JSON.parse(localStorage.getItem('game-library.theme') ?? 'false');
    } catch {
      return false;
    }
  }
}
