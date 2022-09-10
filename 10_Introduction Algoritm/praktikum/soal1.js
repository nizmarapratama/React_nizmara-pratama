function bilanganPrima(angka) {
    if (angka <= 1) {
      return console.log("angka harus lebih besar dari 1");
    }
    if (angka % 2 === 0 || angka % 3 === 0) {
      if (angka / 2 === 1 || angka / 3 === 1) {
        return console.log('${angka} adalah bilangan prima');
      } else {
        return console.log('${angka} bukan bilangan prima');
      }
    } else {
      return console.log('${angka} adalah bilangan prima');
    }
  }
  
  /**
   * Sample Test Cases
  // Input 3, Input 7, Input 10
   */
  const angka = 3;
  bilanganPrima(angka);