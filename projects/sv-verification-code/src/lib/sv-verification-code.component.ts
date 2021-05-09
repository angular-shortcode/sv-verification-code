import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChildren,
  ElementRef,
  QueryList,
  OnChanges, SimpleChanges
} from '@angular/core';

interface Verification {
  value: string | number;
}

@Component({
  selector: 'sv-verification-code',
  templateUrl: './sv-verification-code.component.html',
  styleUrls: ['./sv-verification-code.component.scss']
})
export class SvVerificationCodeComponent implements OnChanges {
  @Input() required = true;
  @Input() digitOnly = true;
  @Input() autofocus = true;
  @Input() numberOfDigit = 5;
  @Output() enter = new EventEmitter();
  @Output() verifyText = new EventEmitter();
  @ViewChildren('input') inputs: QueryList<ElementRef> = [] as any;

  verified = false;
  verificationList: Array<Verification> = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.verificationList = [];
    for (let i = 0 ; i < this.numberOfDigit; i++) {
      this.verificationList.push({value: ''});
    }
  }

  checkKeyCode(event: any): void {
    if (!this.digitOnly) { return; }
    if ((event.keyCode < 96 || event.keyCode > 105) && (event.keyCode < 48 || event.keyCode > 57)
      && event.keyCode !== 8 && event.keyCode !== 46 && event.keyCode !== 9 && event.keyCode !== 13) {
      event.preventDefault();
      this.verified = false;
    } else {
      this.verified = true;
    }
  }

  jumpToNext(index: number, event: any): void {
    if (!this.verified && this.digitOnly) { return; }
    this.verified = false;
    const text = this.verificationList.map(x => x.value).join('');
    this.verifyText.emit(text);
    if (text.length === this.verificationList.length && event.keyCode === 13) {
      this.enter.emit(text);
    }
    if (event.keyCode === 32 || event.keyCode === 9) { return; }
    if (event.keyCode !== 8 && event.keyCode !== 46) {
      this.inputs.toArray()[(index + 1) < this.verificationList.length ? index + 1 : this.verificationList.length - 1].nativeElement.focus();
    }
    if (event.keyCode === 8) {
      this.inputs.toArray()[(index - 1) > 0 ? index - 1 : 0].nativeElement.select();
    }
  }
}
