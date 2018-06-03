import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {IFooterConfig} from "../../layout/footer/FooterConfig";
import {IHeaderConfig} from "../../layout/header/HeaderConfig";
import {IGuitarNewsConfig} from "../../features/news/GuitarNewsConfig";



const footerSetupUrl = "../../assets/json/footer-controller.json";
const headerSetupUrl = "../../assets/json/header-controller.json";

@Injectable({
  providedIn: 'root'
})
export class FileAsSourceForJsonService implements OnInit {
  private myAny: any;  // TODO : not reentrant
  // constructor() { }
  // constructor( private _http: Http ) { }
  constructor(private _http: HttpClient) {
  }

  ngOnInit(): void {
    console.log("FileAsSourceForJsonService is HERE: NEVER RUNS");
  }

  getFooterSetUp() {
    // return this.privateGetFooterSetUpFromArray();  // WORKS
    return this.privateGetFooterSetUpFromHttp();
  }

  private privateGetFooterSetUpFromHttp(): Observable<HttpResponse<IFooterConfig[]>> {
    this.myAny = this._http.get<IFooterConfig[]>(footerSetupUrl,
      {observe: 'response', responseType: 'json'});
    return this.myAny;
  }

  getHeaderSetUp() {
    // return this.privateGetHeaderSetUpFromArray();  // WORKS
    return this.privateGetHeaderSetUpFromHttp(); // WORKS
  }
  getNewsFeed() {
    return this.privateGetNewsFeedFromArray(); // TESTING
  }

  private privateGetHeaderSetUpFromHttp(): Observable<HttpResponse<IHeaderConfig>> {
    this.myAny = this._http.get<IHeaderConfig>(headerSetupUrl,
      {observe: 'response', responseType: 'json'});
    return this.myAny;
  }

  private handleError(err: HttpErrorResponse) {
  }

  private privateGetNewsFeedFromArray(): IGuitarNewsConfig {
    return {
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
  }


  private privateGetHeaderSetUpFromArray(): IHeaderConfig {
    return {
      "title": "Fan Club: Collin College Guitar Studies",
      "targets": [
        {
          "label": "News",
          "url": "guitarNews"
        },
        {
          "label": "Classes",
          "url": "guitarCoursesBySchoolTerm"
        },
        {
          "label": "TEXTBOOKS",
          "url": "guitarTextbooks"
        },
        {
          "label": "Events",
          "url": "guitarEvents"
        },
        {
          "label": "Performances",
          "url": "guitarPerformances"
        },
        {
          "label": "LINKS",
          "url": "guitarLinks"
        },
        {
          "label": "faculty",
          "url": "guitarFaculty"
        }
      ]
    };
  }

    // private privateGetFooterSetUpFromHttp0(): any[] {
    //   this.myAny = this._http.get(footerSetupUrl);
    //   return this.myAny;
    //   // return;
    // }

  private privateGetFooterSetUpFromArray() : IFooterConfig[] {
    return [
      {
        "label": "Guitar Studies Social Media Contacts",
        "runtime": ["guitar-dept-display-flex-column", "guitar-dept-display-flex-nowrap"],
        "payload": [
          {
            "label": "Faculty",
            "icon": "fa fa-graduation-cap",
            "logo": "#0",
            "url": "mailto:fvera@collin.edu"
          },
          {
            "label": "Facebook",
            "icon": "fa fa-facebook",
            "logo": "#0",
            "url": "https://www.facebook.com/groups/419901974694874/"
          },
          {
            "label": "You Tube",
            "icon": "fa fa-youtube",
            "logo": "#0",
            "url": "https://www.youtube.com/channel/UCBb4mtRZixug9VaNYIePxOQ"
          },
          {
            "label": "Instagram",
            "icon": "fa fa-instagram",
            "logo": "#0",
            "url": "https://www.instagram.com/collincollegemusic/"
          },
          {
            "label": "help",
            "icon": "fa fa-info-circle",
            "logo": "#0",
            "url": "../html/news/misc/guitarHowTo-news.html"
          },
          {
            "label": "webmaster",
            "icon": "fa fa-envelope-o",
            "logo": "#0",
            "url": "mailto:tritonpi-collinguitarwebmaster0@yahoo.com"
          }
        ]
      },
      {
        "label": "Guitar Competition Sponsors",
        "runtime": ["guitar-dept-display-flex-row", "guitar-dept-display-flex-wrap"],
        "payload": [
          {
            "label": "Los Angeles Guitar Academy",
            "icon": "#0",
            "logo": "../assets/images/sponsors/LAGA-logos/LAGA.email-image.png",
            "url": "https://onlineguitaracademy.net/"
          },
          {
            "label": "Savarez",
            "icon": "#0",
            "logo": "../assets/images/sponsors/Savarez/Savarez-logo.jpg",
            "url": "http://www.savarez.com/"
          },
          {
            "label": "Strings by Mail",
            "icon": "#0",
            "logo": "../assets/images/sponsors/StringsbyMail/StringsbyMail-logo.jpg",
            "url": "http://www.stringsbymail.com/"
          },
          {
            "label": "Category Software",
            "icon": "#0",
            "logo": "../assets/images/sponsors/categorySoftware/categorySoftware.wTitle-logo.jpg",
            "url": "#0"
          }
        ]
      }
    ];
  };
}

