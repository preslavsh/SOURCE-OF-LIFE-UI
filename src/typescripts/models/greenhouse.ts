import {Plant} from "./plant";
export class Greenhouse{
    constructor(
                public id:number,
                public name:string,
                public plants?:Plant[]
    ){}
}