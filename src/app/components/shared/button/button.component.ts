import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color: string = 'emerald';
  @Input() width: string = 'auto';
  @Input() text: string = '';

  get dinamicClases() {
    return {
      'bg-emerald-600': this.color == 'emerald',
      'hover:bg-emerald-700': this.color == 'emerald',
      'focus:ring-emerald-600': this.color == 'emerald',
      'w-full': this.width == 'full',
      'w-auto': this.width == 'auto',
      'text-xl': this.text == 'xl',
      'text-lg': this.text == 'lg',
      'text-sm': this.text == 'sm',
    };
  }
}
