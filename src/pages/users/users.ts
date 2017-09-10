import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubProvider } from '../../providers/github';
import { User } from '../../models/user';
import { UserDetailsPage } from '../user-details/user-details';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

    users: User[]
    originalUsers: User[];

    constructor(public navCtrl: NavController, private githubProvider: GithubProvider) {
        githubProvider.load().subscribe(users => {
            this.users = users;
            this.originalUsers = users;
        });

        githubProvider
            .searchUsers('scotch').subscribe(users => {
                console.log(users)
            });
    }

    goToDetails(login: string) {
        this.navCtrl.push(UserDetailsPage, { login });
    }

    search(searchEvent) {
        let term = searchEvent.target.value;
        if (term.trim() === '' || term.trim().length < 3) {
            this.users = this.originalUsers;
        } else {
            this.githubProvider.searchUsers(term).subscribe(users => {
                this.users = users;
            });
        }
    }   

}
