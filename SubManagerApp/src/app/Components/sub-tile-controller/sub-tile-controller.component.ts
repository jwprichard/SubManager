import { Component } from '@angular/core';
import { UserDataService } from 'src/app/Services/UserDataService/user-data.service';
import { SubscriptionData } from 'src/types';

@Component({
  selector: 'app-sub-tile-controller',
  templateUrl: './sub-tile-controller.component.html',
  styleUrls: ['./sub-tile-controller.component.scss']
})
export class SubTileControllerComponent {

  subscriptionData: SubscriptionData[]

  constructor(private userDataService: UserDataService) {
    this.subscriptionData = userDataService.getUserData();
    console.log(this.subscriptionData);
  }
}
