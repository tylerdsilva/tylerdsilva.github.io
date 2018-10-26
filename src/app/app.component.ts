import { Component, OnInit } from '@angular/core';
import {UiService} from './services/ui/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-website';
  Width = window.screen.width;
  showMenu = false;
  darkModeActive: boolean;

  constructor(public ui: UiService){}

  ngOnInit() {
    window.scrollTo(0,0);
    this.ui.darkModeState.subscribe((value)=>{
      this.darkModeActive = value;
    });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  modeToggleSwitch() {
    this.ui.darkModeState.next(!this.darkModeActive);
  }

}
