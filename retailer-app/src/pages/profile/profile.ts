import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  //https://api.qrserver.com/v1/create-qr-code/?data=0x627306090abaB3A6e1400e9345bC60c78a8BEf57&size=220x220&margin=0
  user = {
    "name": "Happy",
    "avatar": "https://www.happy.ae/Frontend-Assembly/Telerik.Sitefinity.Frontend.Navigation/assets/dist/images/happiness_logo1.png?package=Bootstrap",
    "backgroundImg": "https://www.happy.ae/images/default-source/home/why-image.jpg?Status=Temp&sfvrsn=2",
    "country": "UAE",
    "email": "support@happy.ae",
    "website": "https://www.happy.ae",
    "publicKey": "0x627306090abaB3A6e1400e9345bC60c78a8BEf57",
    "description": "Happiness and positivity are a lifestyle and government’s commitment and a true spirit that unites the Emirati community."
  };

  constructor(public navCtrl: NavController) { }

  getCredentials() {
    console.log("getCredentials method"); // fill u-port here
  }

  requestCredentials() {
    console.log("requestCredentials method"); // fill u-port here
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
