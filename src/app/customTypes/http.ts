export interface ResponseWithCode<T> {
    code:number;
    data:T;
    message:string;
}