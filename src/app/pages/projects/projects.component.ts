import { Component, OnInit } from '@angular/core';
import {UiService} from "../../services/ui/ui.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(public ui: UiService) { }

  darksProjMode: boolean;

  ngOnInit() {
    window.scrollTo(0,0);
    this.ui.darkModeState.subscribe((isDark) => {
      this.darksProjMode = isDark;
    });
  }

}
