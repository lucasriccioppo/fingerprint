import { Component } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private faio: FingerprintAIO) {}

  teste = () => {
    console.log("Starting...")
    this.faio.show({
      clientId: 'Fingerprint-Demo', //Android: Used for encryption. iOS: used for dialogue if no `localizedReason` is given.
      clientSecret: 'fingerprinsecret', //Necessary for Android encrpytion of keys. Use random secret key.
  })
  .then((result: any) => console.log(result))
  .catch((error: any) => console.log(error));
  }
}
