import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { MemberQuoteData } from "../../components/member-quote/member-quote.component";

interface StaffCategory {
  title: string;
  color: string;
  borderColor: String;
  members: MemberQuoteData
}

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

private jsonUrl: string = "https://raw.githubusercontent.com/Firestarter/docs/master/json/staff-list.json";

  data: Observable<StaffCategory[]>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.data = this.http.get<StaffCategory[]>(this.jsonUrl);
  }

}
