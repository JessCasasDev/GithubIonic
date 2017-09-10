import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { GithubProvider } from '../../providers/github';

@IonicPage()
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {

    login: string;
    user: User;

    constructor(public navCtrl: NavController, public navParams: NavParams, public githubProvider: GithubProvider) {
        this.login = navParams.get('login');
        githubProvider.loadDetails(this.login).subscribe(user => {
            this.user = user;
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailsPage');
  }

}
