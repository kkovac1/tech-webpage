import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  facebook = faFacebook;
  instagram = faInstagram;
  twitter = faTwitter;
  youtube = faYoutube;
  envelope = faEnvelope;
  phone = faPhone;

  constructor() { }

  ngOnInit(): void {
  }

}
