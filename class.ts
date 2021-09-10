class Car {
    model: string;
    price: number;
    private _millage: number;
    constructor(model: string, price: number) {
        this.model = model;
        this.price = price;
        this._millage = 3000;
    }
    getActualMillage(): number {
        const realMillage = this._millage + 10000;
        return realMillage;
    }

    getTotal(tax: number): number {
        const taxAmount = this.price * tax / 100;
        const Total = this.price + taxAmount;
        return Total;
    }
}

const toyota = new Car('toyota', 1000000);
const totalPrice = toyota.getTotal(3000);