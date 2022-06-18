export interface Lists{
    id?:number;
    name?:string;
    status?:boolean;
    url?:string;
    deleteTodo?: () => void;
}