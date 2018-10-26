import { Component, OnInit } from '@angular/core';
import {UiService} from "../../services/ui/ui.service";

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  constructor(public ui: UiService) { }

  darksExpMode: boolean;

  ngOnInit() {
    window.scrollTo(0,0);
    this.ui.darkModeState.subscribe((isDark) => {
      this.darksExpMode = isDark;
    });
  }

}
