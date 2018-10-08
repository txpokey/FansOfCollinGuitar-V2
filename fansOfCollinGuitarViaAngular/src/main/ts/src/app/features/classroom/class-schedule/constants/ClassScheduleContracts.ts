// {
//     "relevent": true,
//     "discipline": "MUSI",
//     "class": 1116,
//     "name": "Sight Singing & Ear Training I "
// },

export interface ICourseCatalogEntries   {  // INWORK
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
export interface ICourseScheduleEntries   {  // INWORK
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