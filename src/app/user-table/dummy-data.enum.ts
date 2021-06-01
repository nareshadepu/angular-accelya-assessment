export class dummyData {
  itemId: number;
  productName: string;
  actualPrice: number;
  discountPrice: number;
  stockAvailable: number;

  constructor(itemId, productName, actualPrice, discountPrice, stockAvailable) {
    this.itemId = itemId;
    this.productName = productName;
    this.actualPrice = actualPrice;
    this.discountPrice = discountPrice;
    this.stockAvailable = stockAvailable;
  }
}
