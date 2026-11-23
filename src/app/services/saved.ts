import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Saved {
  private readonly storageKey = 'game-library.saved';

  private savedIds = signal<number[]>(this.load());

  ids = this.savedIds.asReadonly();

  constructor() {
    effect(() => {
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(this.savedIds()));
      } catch { }
    });
  }

  toggle(id: number): void {
    this.savedIds.update((ids) => (ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]));
  }

  isSaved(id: number): boolean {
    return this.savedIds().includes(id);
  }

  private load(): number[] {
    try {
      const data = localStorage.getItem(this.storageKey);

      if (!data) {
        return [];
      }

      return JSON.parse(data);
    } catch {
      return [];
    }
  }
}
