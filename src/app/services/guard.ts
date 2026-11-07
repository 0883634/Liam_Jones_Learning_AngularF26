import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GuardService {
  guardEnabled = signal(true);

  toggle(): void {
    this.guardEnabled.update((current) => !current);
  }
}
export class Guard {}
