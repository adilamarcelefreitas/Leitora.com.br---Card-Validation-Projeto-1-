const validator = {
    // Function to validate a credit card number using the Luhn algorithm
    isValidCreditCard: function (creditCardNumber) {
      // Remove any non-digit characters
      const cleanedNumber = creditCardNumber.replace(/\D/g, '');
  
      // Check if the cleaned number is empty or not a number
      if (cleanedNumber === '' || isNaN(cleanedNumber)) {
        return false;
      }
  
      let sum = 0;
      let shouldDouble = false;
  
      // Iterate through the digits in reverse order
      for (let i = cleanedNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cleanedNumber.charAt(i), 10);
  
        if (shouldDouble) {
          digit *= 2;
  
          // If doubling the digit results in a two-digit number,
          // sum the digits of the result
          if (digit > 9) {
            digit -= 9;
          }
        }
  
        sum += digit;
        shouldDouble = !shouldDouble;
      }
  
      // The credit card number is valid if the sum is divisible by 10
      return sum % 10 === 0;
    },
  };
  
  export default validator;
  
