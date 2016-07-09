import {PipeTransform,Pipe} from "@angular/core";

@Pipe({
    name:"sgCapitalCase"
})
export class CapitalCasePipe implements PipeTransform{
    transform(value: string){
        let newVal = value[0].toLocaleUpperCase();
        newVal+=value.substr(1,value.length);
        return newVal;
    }
}