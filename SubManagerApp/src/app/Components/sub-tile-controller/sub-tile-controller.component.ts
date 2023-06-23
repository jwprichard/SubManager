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
  subscriptionDataTable: any[][]
  columnCount: number
  

  constructor(private userDataService: UserDataService) {
    this.subscriptionData = userDataService.getUserData();
    this.columnCount = 3
    this.subscriptionDataTable = new Array()
    let rowCount = 0

    // Initialise the nested array.
    this.subscriptionDataTable[0] = new Array();

    for(let i = 0; i < this.subscriptionData.length; i++)
    {
      if (i == (rowCount + 1) * this.columnCount)
      {
        rowCount++
        this.subscriptionDataTable[rowCount] = new Array();
      }
      console.log(rowCount + "-" + i%this.columnCount)
      this.subscriptionDataTable[rowCount][i%this.columnCount] = this.subscriptionData[i]
    }
    console.log(this.subscriptionDataTable)
  }
}
