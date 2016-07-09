import {PipeTransform,Pipe} from "@angular/core";

@Pipe({
    name:"filterByName"
})
export class FilterByNamePipe implements PipeTransform{
    transform(allPlants:any[],filter){
        if(!filter && filter.lenght===0){
            return allPlants;
        }
        return allPlants.filter(p=>new RegExp(`${filter.toLowerCase()}`).test(p.name.toLowerCase()))
    }
}