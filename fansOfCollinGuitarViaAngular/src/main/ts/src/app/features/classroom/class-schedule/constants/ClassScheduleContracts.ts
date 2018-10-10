
export interface ICourseCatalogEntries   {  // DONE
    schoolterm: string ;
    payload: any[] ;
}
export interface ICourseScheduleEntries {
    courseSectionList: string ;
    payload: ICourseScheduleEntry[] ;
}
export interface ICourseScheduleEntry   {  // DONE
    year : string ;
    term : string ;
    publish : string ;
    status : string ;
    crn : string ;
    subject : string ;
    course : string ;
    section : string ;
    credits : string ;
    title : string ;
    days : string ;
    time : string ;
    dates : string ;
    location : string ;
    maxSize : string ;
    seatsOpen : string ;
    maxWaiting : string ;
    waitingOpen : string ;
    instructor : string ;

}