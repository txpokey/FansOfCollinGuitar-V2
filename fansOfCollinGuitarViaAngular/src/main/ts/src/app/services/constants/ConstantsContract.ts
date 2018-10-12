export namespace ConstantsContract {

    export const JavaScriptBaseUrl: string = location.host;
    // use port for client-side of docker container running SpringBoot
    export const SpringbootBaseUrl: string = "http://localhost:80";
    export const BaseUrl: string = JavaScriptBaseUrl;

}