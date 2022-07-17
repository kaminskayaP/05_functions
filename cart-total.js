export default function basketAterDiscouts (basketSum, numberOfPurchases, promo = null) {
  if (promo === 'ДАРИМ300') {
    basketSum = basketSum - 300;
  }
  if (basketSum <= 0){
    basketSum = 0;
    return basketSum;
  }
  if (numberOfPurchases >= 10) {
    basketSum -= basketSum * .05;
  }
  if (basketSum > 50000){
    basketSum -= (basketSum - 50000) * .2;
  }
  if (promo === 'СКИДКА15' && basketSum >= 20000){
    basketSum -= basketSum * .15;
  }
  return basketSum;
}