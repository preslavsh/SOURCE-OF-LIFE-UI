import {PipeTransform,Pipe} from "angular2/core";

@Pipe({
    name: "filterByNameCat"
})
export class FilterByNameCatPipe implements PipeTransform {
    transform(allPlants:any[], filter, category) {
        let regex = new RegExp(`${filter.toLowerCase()}`);
        if (category === 'all') {
            return allPlants.filter(p=>regex.test(p.name.toLowerCase()))
        }
        return allPlants.filter(p=>regex.test(p.name.toLowerCase()) && p.category === category);
    }
}