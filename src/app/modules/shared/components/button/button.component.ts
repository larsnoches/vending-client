import { Component, Input } from '@angular/core';

enum ButtonSize {
  small,
  medium,
  large,
}

@Component({
  selector: 'app-shared-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  // @Input() id?: string = '';
  @Input() size: ButtonSize = ButtonSize.medium;
}
