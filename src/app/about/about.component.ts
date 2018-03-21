import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = 'Tool làm thơ';
  description = 'Công cụ giúp việc tìm vần của từ hiệu quả hơn. Xuất phát từ nhu cầu làm thơ của bản thân';
  avatar = 'https://graph.facebook.com/100003474639175/picture?width=320&height=320';
  urlFacebook = 'http://facebook.com/xuanhuylife';
  urlInstagram = 'http://instagram.com/xuanhuyjs';
  logoFacebook = 'https://use.fontawesome.com/releases/v5.0.8/svgs/brands/facebook-square.svg';
  logoInstagram = 'https://use.fontawesome.com/releases/v5.0.8/svgs/brands/instagram.svg';
  usernameFacebook = '@xuanhuylife';
  usernameInstagram = '@xuanhuyjs';
  urlGif = 'assets/giphy.gif';

  constructor() { }

  ngOnInit() {
  }

}
