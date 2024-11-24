import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color: string = 'blue-chill';
  @Input() width: string = 'auto';

  get colors() {
    return {
      'bg-blue-chill-700': this.color == 'blue-chill',
      'hover:bg-blue-chill-800': this.color == 'blue-chill',
      'focus:ring-blue-chill-600': this.color == 'blue-chill',
      'w-full': this.width == 'full',
      'w-auto': this.width == 'auto',
    };
  }
}
