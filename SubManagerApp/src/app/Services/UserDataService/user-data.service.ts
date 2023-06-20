import { Injectable } from '@angular/core';
import { SubscriptionData } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  public getUserData() : SubscriptionData[] {
    return [
    {
        name: "Netflix",
        logoimagelink: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
        price: 8.99
    },
    {
        name: "Hulu",
        logoimagelink: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg",
        price: 5.99
    },
    {
        name: "Disney+",
        logoimagelink: "https://upload.wikimedia.org/wikipedia/commons/1/16/Disney%2B_logo.svg",
        price: 7.99
    },
    {
        name: "Amazon Prime Video",
        logoimagelink: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Amazon_Prime_Video_logo.svg",
        price: 8.99
    },
    {
        name: "HBO Max",
        logoimagelink: "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg",
        price: 14.99
    },
    {
        name: "Apple TV+",
        logoimagelink: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Apple_TV%2B_logo.svg",
        price: 4.99
    },
    {
        name: "Peacock",
        logoimagelink: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Peacock_Logo.svg",
        price: 4.99
    },
    {
        name: "Paramount+",
        logoimagelink: "https://upload.wikimedia.org/wikipedia/commons/b/bd/CBS_All_Access_logo.svg",
        price: 5.99
    },
    {
        name: "YouTube TV",
        logoimagelink: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg",
        price: 64.99
    },
    {
        name: "Sling TV",
        logoimagelink: "",
        price: 35.00
    }
]
  }
}
