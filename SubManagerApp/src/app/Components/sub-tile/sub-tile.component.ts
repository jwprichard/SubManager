import { Component, Input } from '@angular/core';
import { UserDataService } from 'src/app/Services/UserDataService/user-data.service';
import { SubscriptionData } from 'src/types';

@Component({
  selector: 'app-sub-tile',
  templateUrl: './sub-tile.component.html',
  styleUrls: ['./sub-tile.component.scss']
})
export class SubTileComponent {

  subscriptionData: SubscriptionData;

  constructor(private userDataService: UserDataService) {
    this.subscriptionData = userDataService.getUserData();
  }

}
