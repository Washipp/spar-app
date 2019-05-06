export class SavedAmount {
  public originalPrice: number;
  public percent: number;
  public budgetPrice: number;
  public reducedPrice: number;

  constructor () {}

  getSavedAmount() {
    if (typeof this.originalPrice !== 'undefined' && this.originalPrice > 0) {
      if (typeof this.percent !== 'undefined' && this.percent > 0) {
        return (this.originalPrice / 100) * this.percent;
      } else {
        return this.originalPrice - this.reducedPrice;
      }
    } else if (typeof this.budgetPrice !== 'undefined') {
      return this.budgetPrice;
    }
  }
}
