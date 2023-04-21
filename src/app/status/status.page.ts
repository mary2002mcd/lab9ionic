import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Storage} from '@ionic/storage-angular'
@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {

  myStatus:string = "";
  constructor(private storage:Storage, private navCtrl:NavController) { }

  ngOnInit() {
  }

  async onSave(){
    await this.storage.create();
    await this.storage.set("status", this.myStatus);
    await this.navCtrl.navigateBack('/home');
  }

}
