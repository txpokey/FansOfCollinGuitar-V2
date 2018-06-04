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
      "url": "../assets/html/bio/vanessa/VC-bio.html",
      "image": "../assets/html/bio/vanessa/VC-image.jpg"
    },
    {
      "name": "Nathaniel Earhart",
      "url": "../assets/html/bio/nathaniel/NE-bio.html",
      "image": "../assets/html/bio/nathaniel/NE-image.jpg"
    },
    {
      "name": "Dr. Olga Amelkina-Vera",
      "url": "../assets/html/bio/olga/OAV-bio.html",
      "image": "../assets/html/bio/olga/OAV-image.jpg"
    },
    {
      "name": "Dr. Fernand Vera",
      "url": "../assets/html/bio/fernand/FV-bio.html",
      "image": "../assets/html/bio/fernand/FV-image.png"
    }
  ]
};
