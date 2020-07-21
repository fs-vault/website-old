import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Observable<any[]>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.posts = this.afs.collection('posts', ref => ref.limit(5)).valueChanges();
  }

}
