import { Component } from '@angular/core';
import { faInstagram, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  faSquareInstagram = faInstagram;
  faSquareFacebook = faFacebook;
  faSquareXTwitter = faXTwitter;




}
