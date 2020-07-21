import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Config} from 'codelyzer';

@Component({
  selector: 'app-online-card',
  templateUrl: './online-card.component.html',
  styleUrls: ['./online-card.component.scss']
})
export class OnlineCardComponent implements OnInit {

  onlineCounts = {
    server: 0,
    discord: 0
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://api.minetools.eu/ping/firestartermc.com').subscribe((data: Config) => {
      this.onlineCounts.server = data['players']['online'];
    });

    this.http.get('https://discordapp.com/api/guilds/609452308161363995/widget.json').subscribe((data: Config) => {
      this.onlineCounts.discord = data['members'].length;
    });
  }

}
