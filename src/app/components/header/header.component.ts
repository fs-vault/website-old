import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  ip = 'firestartermc.com';
  color = '#FF5B5B';

  constructor() { }


  copyIP() {
    // Copy the IP
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.ip;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    // Set field to "Copied IP"
    this.ip = 'Copied IP!';
    this.color = '#51DF56';

    // Reset back to normal after 2 seconds
    setTimeout(() => {
      this.ip = 'firestartermc.com';
      this.color = '#FF5B5B';
    }, 2000);
  }

}
