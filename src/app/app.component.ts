import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sectionToDisplay = 'Recipes';

  onSectionClicked(linkData: { sectionName: string }) {
    this.sectionToDisplay = linkData.sectionName;
    console.log(this.sectionToDisplay);
  }
}
