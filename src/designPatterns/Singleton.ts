class Singleton {
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


const singleton = Singleton.getInstance("Gio", 20);
const singleton2 = Singleton.getInstance("Jaz", 40);

console.log(singleton === singleton2);
console.log({
  singleton,
  singleton2
})