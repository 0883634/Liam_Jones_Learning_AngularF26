import { Directive, input, output } from '@angular/core';

@Directive({
  selector: '[appConfirm]',
  host: {
    '(click)': 'confirmAction()',
  },
})
export class AppConfirm {
  message = input('Are you sure?', {
    alias: 'appConfirm',
  });

  confirmed = output<void>();

  confirmAction(): void {
    if (confirm(this.message())) {
      this.confirmed.emit();
    }
  }
}
