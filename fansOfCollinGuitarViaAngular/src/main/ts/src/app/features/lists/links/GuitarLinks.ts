export interface IGuitarLinksDetails   {
  label: string ;
  url: string ;
}
export interface IGuitarLinks   {
  label: string ;
  payload: IGuitarLinksDetails[] ;
}

export const GUITARLINKS : IGuitarLinks[] = [  // DEAD CODE
  {
    "label": "Internal Links",
    "payload": [
      {
        "label": "Music Department",
        "url": "http://www.collin.edu/department/music/index.html"
      },
      {
        "label": "Music Library",
        "url": "http://collin.libguides.com/music"
      },
      {
        "label": "Music Department Calendar",
        "url": "http://www.collin.edu/department/music/Info_Pages/musicevents.html"
      },
      {
        "label": "Technical Jury Form",
        "url": "../assets/pdf/JuryForms--2017-Fall.zip"
      },
      {
        "label": "Final Jury Form",
        "url": "../assets/pdf/JuryForms--2017-Fall.zip"
      }
    ]
  },
  {
    "label": "External Links",
    "payload": [
      {
        "label": "Allegro Guitar Society",
        "url": "http://guitarsociety.org/"
      },
      {
        "label": "Guitar Foundation of America",
        "url": "http://www.guitarfoundation.org/"
      },

      {
        "label": "Los Angeles Guitar Academy (LAGA)",
        "url": "https://onlineguitaracademy.net/"
      },
      {
        "label": "Regional Symposiums: Guitar Foundation of America",
        "url": "http://www.guitarfoundation.org/?page=RegionalSymposiums"
      },
      {
        "label": "Sheet Music Plus",
        "url": "http://www.sheetmusicplus.com/"
      },
      {
        "label": "Strings by Mail",
        "url": "http://www.stringsbymail.com/"
      },
      {
        "label": "Texas Guitar Competition and Festival",
        "url": "http://www.utdallas.edu/ah/programs/arts/musi/guitarcomp.html"
      },
      {
        "label": "UTD Guitar Series",
        "url": "http://www.utdallas.edu/ah/events/events-music.html#guitar"
      }
    ]
  },
  {
    "label": "In Memoriam",
    "payload": [
      {
        "label": "Collin College Mourns Passing of Music Professor",
        "url": "http://www.collin.edu/news/PressReleases/2011-2012/20120223sabineMadriguera.html"
      }
    ]
  }
];
