import { Service, signal } from '@angular/core';

@Service()
export class ErrorService {
  message = signal<string | null>(null);

  setMessage(message: string): void {
    this.message.set(message);
  }

  clear(): void {
    this.message.set(null);
  }
}
