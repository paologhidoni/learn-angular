import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() sectionClicked = new EventEmitter<{
    sectionName: string;
  }>();

  onClickLink(linkElement: HTMLAnchorElement) {
    // console.log(linkText.innerText);
    this.sectionClicked.emit({
      sectionName: linkElement.innerText,
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
