export class Plant {
    constructor(public name:string,
                public en_name:string,
                public ph:string,
                public description:string,
                public water:string,
                public sun:string,
                public dishes?:Array<any>){
    }

    static empty():Plant{
        return new Plant("","","","","","");
    }
}