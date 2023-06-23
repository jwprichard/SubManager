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
    // Initialise variables
    this.subscriptionData = userDataService.getUserData()
    this.subscriptionDataTable = new Array()
    this.columnCount = 3

    this.FormatTable()
  }

  // Takes the subscription data and formats it into a table to be
  // displayed correctly.
  private FormatTable(){

    // Initialise the nested array.
    this.subscriptionDataTable[0] = new Array();
    let rowCount = 0

    // Loop through the subscription data and assign it to nested arrays in SubscriptionDataTable
    // based on the selected columnCount.
    for(let i = 0; i < this.subscriptionData.length; i++)
    {
      if (i == (rowCount + 1) * this.columnCount)
      {
        rowCount++
        this.subscriptionDataTable[rowCount] = new Array();
      }
      this.subscriptionDataTable[rowCount][i%this.columnCount] = this.subscriptionData[i]
    }
  }
}
