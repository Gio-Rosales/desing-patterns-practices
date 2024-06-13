import Singleton from "./designPatterns/Singleton";
import { RegularSaleStrategy, SaleContext, PromotionSaleStrategy } from "./designPatterns/Strategy";

(() => {
  const singleton = Singleton.getInstance("Gio", 20);
  const singleton2 = Singleton.getInstance("Jaz", 40);

  console.log(singleton === singleton2);
  console.log({
    singleton,
    singleton2
  })
})();

(() => {
  const regularSale = new RegularSaleStrategy(0.20);
  const saleContext = new SaleContext(regularSale);
  const hotSalePromotion = new PromotionSaleStrategy(.15);
  const hotSalePromotionInstance = new SaleContext(hotSalePromotion);

  console.log(saleContext.calculate(100));
  console.log(hotSalePromotionInstance.calculate(100));
})();