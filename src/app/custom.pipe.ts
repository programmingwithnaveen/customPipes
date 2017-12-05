import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name:'customUpperCase'
})
export class customUpperCase implements PipeTransform{
    transform(value: string, ...args: any[]): any{
        if(!value) return null;
        return value.toUpperCase();
    }
    

}
@Pipe({
    name:'customLowerCase'
})
export class customLowerCase implements PipeTransform{
    transform(value: string, ...args: any[]): any{
        if(!value) return null;
        return value.toLowerCase();
    }
    

}

@Pipe({
    name:'summaryPipe'
})
export class summaryPipe implements PipeTransform{
    transform(value: string, limit?: number): any{
        if(!value) return null;
        let actualLimit = limit? limit:50;
        return value.substr(0,actualLimit);
    }
    

}