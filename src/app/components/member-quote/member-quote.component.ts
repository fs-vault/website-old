import { Component, OnInit, Input } from '@angular/core';

export interface MemberQuoteData {
  uuid: string;
  name: string;
  quote: string;
}

@Component({
  selector: 'app-member-quote',
  templateUrl: './member-quote.component.html',
  styleUrls: ['./member-quote.component.scss']
})
export class MemberQuoteComponent {

  @Input() data: MemberQuoteData;

  constructor() { }

}
