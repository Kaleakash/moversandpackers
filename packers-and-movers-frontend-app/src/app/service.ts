export class Service {
    constructor(public title:string,
        public description:string,
        public filePath:string,
        public items:Items[]){}
}


export class Items {
    constructor(public itemName:string,public price:number){

    }
}