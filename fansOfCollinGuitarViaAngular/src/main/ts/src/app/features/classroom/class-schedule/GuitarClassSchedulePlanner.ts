import {
  GUITAR_PROGRAM_SCHEDULE_2018_SPRING,
  MUSIC_DEPT_CATALOG_2018_SPRING
} from "./constants/2018/spring/GuitarClassSchedulePlanner";

export interface IMusicDeptCatalogEntries   {  // RETIRED
  relevent: boolean ;
  discipline: string ;
  class: number ;
  name: string ;
}
export interface IMusicDeptCatalogByTerm   {  // RETIRED
  schoolTermLabel: string ;
  schoolYear: number ;
  schoolSemester: string ;
  payload: IMusicDeptCatalogEntries[] ;
}
export interface IGuitarProgramCourseScheduleEntries   {  // RETIRED
  active: boolean ;
  CRN: number ;
  Subj: string ;
  Crse: number ;
  Sec: string ;
  Cred: number ;
  Title: string ;
  Days: string ;
  Time: string ;
  calendar: string ;
  Location: string ;
  Cap: number ;
  Rem: number ;
  WLCap: number ;
  WLRem: string ;
  Instructor: string ;
}
export interface IGuitarProgramCourseScheduleByTerm   {
  schoolTermLabel: string ;
  schoolYear: number ;
  schoolSemester: string ;
  payload: IGuitarProgramCourseScheduleEntries[] ;
}

export const GUITAR_PROGRAM_COURSE_SCHEDULE: IGuitarProgramCourseScheduleByTerm[] = [
  GUITAR_PROGRAM_SCHEDULE_2018_SPRING
] ;
export const MUSIC_DEPT_CATALOG : IMusicDeptCatalogByTerm[] = [
  MUSIC_DEPT_CATALOG_2018_SPRING
] ;
