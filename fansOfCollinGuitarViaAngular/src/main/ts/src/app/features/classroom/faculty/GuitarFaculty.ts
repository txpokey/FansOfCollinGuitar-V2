export interface IGuitarFacultyDetail   {
  name: string ;
  url: string ;
  image: string ;
}
export interface IGuitarFaculty   {
  title: string ;
  payload: IGuitarFacultyDetail[] ;
}
export const GUITARFACULTY : IGuitarFaculty = {
  "title": "Guitar Studies Faculty",
  "payload": [
    {
      "name": "Vanessa Corder",
      "url": "../html/bio/vanessa/VC-bio.html",
      "image": "../html/bio/vanessa/VC-image.jpg"
    },
    {
      "name": "Nathaniel Earhart",
      "url": "../html/bio/nathaniel/NE-bio.html",
      "image": "../html/bio/nathaniel/NE-image.jpg"
    },
    {
      "name": "Dr. Olga Amelkina-Vera",
      "url": "../html/bio/olga/OAV-bio.html",
      "image": "../html/bio/olga/OAV-image.jpg"
    },
    {
      "name": "Dr. Fernand Vera",
      "url": "../html/bio/fernand/FV-bio.html",
      "image": "../html/bio/fernand/FV-image.png"
    }
  ]
};
