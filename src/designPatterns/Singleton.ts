export default class Singleton {
  private static instance: Singleton;
  name?: string;
  price?: number;

  private constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  static getInstance(name: string, price: number) {
    if(!Singleton.instance) {
      Singleton.instance = new this(name, price);
    }

    return Singleton.instance;
  }
}