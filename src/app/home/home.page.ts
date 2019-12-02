import { Component } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  msg: String

  constructor(private faio: FingerprintAIO) {
    this.msg = "Aguardando"
  }

  submit = () => {
    this.faio.show({
      description: 'oh yes'
    })
    .then((result: any) => this.msg = "Autenticação completa!")
    .catch((error: any) => this.msg = "Autenticação falhou")
  }

  resetMsg = () => {
    this.msg = "Aguardando"
  }
}
