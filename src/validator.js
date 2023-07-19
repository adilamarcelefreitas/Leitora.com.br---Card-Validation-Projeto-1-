
const validator = {
}
  /*
  maskify: function (creditCardNumber) {
      const visibleDigits = 4;
      if (creditCardNumber.length <= visibleDigits) {
          return creditCardNumber;
      }

      const maskedPart = '#'.repeat(creditCardNumber.length - visibleDigits) + creditCardNumber.slice(-visibleDigits);
      return maskedPart;
  },

  isValidCreditCard: function (creditCardNumber) {
      if (!/^\d+$/.test(creditCardNumber)) {
          return false; 
      }

      const reversedDigits = creditCardNumber.split('').reverse().map(Number);
      let sum = 0;

      for (let i = 0; i < reversedDigits.length; i++) {
          let digit = reversedDigits[i];

          if (i % 2 !== 0) {
              digit *= 2;
              if (digit > 9) {
                  digit -= 9;
              }
          }

          sum += digit;
      }

      return sum % 10 === 0;
  }
};
*/
export default validator;

