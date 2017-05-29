import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  styleUrls: ['home.component.css'],
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

  private freeToPlay = 'Free To Play';

  ngOnInit() {
  }
}
