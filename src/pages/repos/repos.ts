import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubProvider } from '../../providers/github';

/**
 * Generated class for the ReposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html',
})
export class ReposPage {

  username: string;
  loading: boolean;
  repos: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public github: GithubProvider) {
    this.username = "";
    this.loading = false;
    this.repos = null;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReposPage');
  }
  search(searchEvent) {
    if(searchEvent.keyCode == 13){
      this.loading = true;
      this.github.searchRepo(this.username).then( data => {
          console.log(data);
          this.repos = data;
          if(this.repos.lenght == 0) this.repos = null;
          this.loading = false;
        }
      ).catch( data => {
        this.repos = null;
        this.loading = false;
      });
    }
  }

}
