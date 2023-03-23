export class OrdersPlace {
    constructor(
        public customerName?:string,
        public email?:string,
        public phoneNumber?:string,
        public movingFrom?:string,
        public movingTo?:string,
        public movingDate?:string,
        public quoteInfo?:QuoteInfo[]){}
}

export class QuoteInfo{
    constructor(public basePrice:number,
        public itemName?:string,
        public quantityName?:string,
        public serviceName?:string,
        public totalPrice?:number,
        public quantity?:Number){}
}