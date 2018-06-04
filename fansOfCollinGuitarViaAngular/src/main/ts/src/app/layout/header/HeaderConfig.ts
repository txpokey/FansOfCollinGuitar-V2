/* Defines the footer data */

export interface IHeaderConfigDetail   {
  label: string;
  url: string;
}
export interface IHeaderConfig   {
  title: string;
  targets: IHeaderConfigDetail[];
}
export const GUITARHEADER : IHeaderConfig = {
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


