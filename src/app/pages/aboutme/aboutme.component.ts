import { Component, OnInit } from '@angular/core';
import {UiService} from "../../services/ui/ui.service"

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(public ui: UiService) {
  }

  state:number = 0;
  darksMode: boolean;

  ngOnInit() {
    window.scrollTo(0, 0);
    this.ui.darkModeState.subscribe((isDark) => {
      this.darksMode = isDark;
    });
  }

  techOnClick() {
    this.state = 1;
  }

  sportsOnClick() {
    this.state = 2;
  }

  musicOnClick() {
    this.state = 3;
  }

  soccerOnClick() {
    this.state = 4;
  }

  tennisOnClick() {
    this.state = 5;
  }

  hockeyOnClick() {
    this.state = 6;
  }

  tkdOnClick() {
    this.state = 7;
  }

  backClick() {
    if(this.state >= 4)
    this.state = 2;
    else
    this.state = 0;
  }

  robotC() {
    window.open('https://cs2n.org/shared_achievement/UserMilestone/915c1f9d86cd', '_blank');
  }

  cssBasic() {
    window.open('https://courses.edx.org/certificates/0b3da00dde9d4a0eb7e4a36ee78e7ec1', '_blank');
  }

}
