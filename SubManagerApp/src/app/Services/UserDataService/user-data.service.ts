import { Injectable } from '@angular/core';
import { SubscriptionData } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  subscriptionData: SubscriptionData[]  =  [
    {
      "name": "Netflix",
      "logoimagelink": "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      "price": 8.99,
      "paymentFrequency": "Monthly"
    },
    {
      "name": "Amazon Prime Video",
      "logoimagelink": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Amazon_Prime_Logo.svg/2560px-Amazon_Prime_Logo.svg.png",
      "price": 12.99,
      "paymentFrequency": "Monthly"
    },
    {
      "name": "Hulu",
      "logoimagelink": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg",
      "price": 11.99,
      "paymentFrequency": "Monthly"
    },
    {
      "name": "Disney+",
      "logoimagelink": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg",
      "price": 7.99,
      "paymentFrequency": "Monthly"
    },
    {
      "name": "Apple TV+",
      "logoimagelink": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/2560px-Apple_TV_Plus_Logo.svg.png",
      "price": 4.99,
      "paymentFrequency": "Monthly"
    },
    {
      "name": "HBO Max",
      "logoimagelink": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/HBO_Max_Logo.svg/2560px-HBO_Max_Logo.svg.png",
      "price": 14.99,
      "paymentFrequency": "Monthly"
    },
    {
      "name": "YouTube Premium",
      "logoimagelink": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/YouTube_Premium_logo.svg/1280px-YouTube_Premium_logo.svg.png",
      "price": 11.99,
      "paymentFrequency": "Monthly"
    },
    {
      "name": "Spotify Premium",
      "logoimagelink": "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
      "price": 9.99,
      "paymentFrequency": "Monthly"
    },
    {
      "name": "Twitch Prime",
      "logoimagelink": "https://upload.wikimedia.org/wikipedia/commons/2/26/Twitch_logo.svg",
      "price": 12.99,
      "paymentFrequency": "Monthly"
    },
    {
      "name": "CBS All Access",
      "logoimagelink": "https://w7.pngwing.com/pngs/172/1004/png-transparent-cbs-all-access-streaming-media-television-show-access-miscellaneous-television-blue.png",
      "price": 5.99,
      "paymentFrequency": "Monthly"
    }
  ]

  public getUserData() : SubscriptionData[] {
    return this.subscriptionData
  }
}
