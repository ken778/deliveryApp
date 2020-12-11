import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular'


@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {
  }


close() {
  this.modalCtrl.dismiss();
}

async checkout() {
let alert = await this.alertCtrl.create({
  header: 'Thanks for your Order!',
  message: 'Your order has been placed, we will deliver it as soon as posiible',
  buttons: ['OK']
});
alert.present().then(() => {
  this.modalCtrl.dismiss();
});
}
}