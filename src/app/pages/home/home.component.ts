import { Component, OnInit, HostListener } from '@angular/core';
import anime from 'animejs';
import {UiService} from "../../services/ui/ui.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public ui: UiService) { }

  darkMode: boolean;
  innerWidth:number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit() {
    window.scrollTo(0,0);
    this.innerWidth = window.innerWidth;
    var pathEls = document.querySelectorAll('path');
    for (var i = 0; i < pathEls.length; i++) {
      var pathEl = pathEls[i];
      var offset = anime.setDashoffset(pathEl);
      pathEl.setAttribute('stroke-dashoffset', offset);
      anime({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: anime.random(1000, 3000),
        delay: anime.random(0, 2000),
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine',
        autoplay: true
      });
    }

    this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });
  }

}
