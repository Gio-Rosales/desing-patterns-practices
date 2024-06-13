abstract class SaleStrategy {
  abstract getTotal(amount: number): number ;
}

export class SaleContext {
  private strategy: SaleStrategy;

  constructor(strategy: SaleStrategy) {
    this.strategy = strategy;
  }

  calculate(amount: number): number {
    return this.strategy.getTotal(amount);
  }
}

export class RegularSaleStrategy implements SaleStrategy {
  tax: number;
  constructor(tax: number) {
    this.tax = tax;
  }

  getTotal(amount: number): number {
    return amount + (amount * this.tax);
  }
}

export class PromotionSaleStrategy implements SaleStrategy {
  tax: number
  discount: number;
  constructor(tax: number, discount: number) {
    if(discount >= 1 || discount < 0) {
      throw new Error("Discount must be greater than 0 and less than 1");
    }
    this.discount = discount;
    this.tax = tax;
  }

  getTotal(amount: number): number {
    return amount - (amount * this.discount);
  }
}