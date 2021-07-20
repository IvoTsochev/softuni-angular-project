import { Component } from '@angular/core';
import { ContentService } from './content.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private content: ContentService) {
    this.content.loadGames().subscribe(data => {
      console.warn(data)
    })
  }
}
