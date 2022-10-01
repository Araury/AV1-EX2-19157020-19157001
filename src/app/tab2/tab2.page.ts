import { Component} from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  constructor(public actionSheetCtrl: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: '2021-2',
      buttons: [
        {
          text: 'Agosto',
        },
        {
          text: 'Setembro',
        },
        {
          text: 'Outubro',
        },
        {
          text: 'Novembro',
        },
        {
          text: 'Dezembro',
        },
        {
          text: 'Sair',
        },
      ],
      cssClass: 'custom-css',
      animated: true,
      backdropDismiss: true,
      keyboardClose: false,
      mode: 'ios'
    });

    actionSheet.present();
  }

}
