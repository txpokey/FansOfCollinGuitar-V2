/* Defines the news data */

export interface IGuitarNewsConfigDetail   {
  test: boolean;
  name: string;
  date: string;
  time: string;
  where: string;
  event: string;
  image: string;
  url: string;
}

export interface IGuitarNewsConfig   {
  title: string;
  payload: IGuitarNewsConfigDetail[];
}

export const GUITARNEWS : IGuitarNewsConfig = {
  "title": "Spring 2018 Highlights",
  "payload": [
    {
      "test": false,
      "name": "2018 Spring Guitar Events at Collin College",
      "date": "Date",
      "time": "Time",
      "where": "Location/Room",
      "event": "Events",
      "image": "Photo",
      "url": "#0"
    },
    {
      "test": true,
      "name": "6th Annual Collin College Guitar Festival",
      "date": "2/09/2018-2/11/2018",
      "time": "--",
      "where": "Spring Creek",
      "event": "6th Annual Collin College Guitar Festival",
      "image": "../assets/images/news/2018/spring/current/CCGF2018.jpg",
      "url": "../assets/html/news/2018/spring/current/guitarFestival-news.html"
    },
    {
      "test": true,
      "name": "Fan Club Website: Updated for Spring 2018",
      "date": "1/8/2018",
      "time": "12am",
      "where": "internet",
      "event": "Using Collin College Guitar Studies Website",
      "image": "../assets/images/header/guitarStudies.light-logo.jpg",
      "url": "../assets/html/news/2018/spring/current/guitarWebsite-news.html"
    }
  ]
} ;
