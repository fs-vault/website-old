import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config} from 'codelyzer';

@Component({
  selector: 'app-top-voter-card',
  templateUrl: './top-voter-card.component.html',
  styleUrls: ['./top-voter-card.component.scss']
})
export class TopVoterCardComponent implements OnInit {

  topVoter = {
    uuid: 'e4ae86d8-8040-4e76-a3b3-ba0fba1caf69',
    name: 'ヽ(゜∇゜)ノ',
    votes: 0
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://api.firestartermc.com/players/votes/top').subscribe((data: Config) => {
      this.http.get(`https://api.minetools.eu/uuid/${data[0].uuid.replace(/-/g, '')}`).subscribe((result: Config) => {
        this.topVoter = {
          uuid: data[0]['uuid'],
          name: result['name'],
          votes: data[0]['votes']
        };
      });
    });
  }

}
