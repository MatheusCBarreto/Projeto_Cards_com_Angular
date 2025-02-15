import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({ required: true }) btnText: string = "";
  @Input() btnStyle: "white" | "purple" = "white";
  @Input() isDisabled: boolean = false;

  @Output() btnClickedEmit = new EventEmitter<void>();

  onBtnClicked() {
    this.btnClickedEmit.emit();
  }
}
