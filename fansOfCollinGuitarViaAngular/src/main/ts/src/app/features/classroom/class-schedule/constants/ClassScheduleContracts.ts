// {
//     "relevent": true,
//     "discipline": "MUSI",
//     "class": 1116,
//     "name": "Sight Singing & Ear Training I "
// },

export interface ICourseCatalogEntries   {  // INPLAY
    // subject: string ;
    // course: number ;
    // title: string ;
    schoolterm: string ;
    payload: any[] ;
}

// export interface IMusicDeptCatalogByTerm   {  // RETIRED
//     schoolTermLabel: string ;
//     schoolYear: number ;
//     schoolSemester: string ;
//     payload: IMusicDeptCatalogEntries[] ;
// }
export interface ICourseScheduleEntries {
    courseSectionList: string ;
    payload: ICourseScheduleEntry[] ;
}
export interface ICourseScheduleEntry   {  // INWORK
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