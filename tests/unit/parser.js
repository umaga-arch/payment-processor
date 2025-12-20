// parser.js
import { PaymentMethod } from '../models/PaymentMethod';

class Parser {
  static parsePaymentMethod(paymentMethodStr) {
    const paymentMethods = {
      'credit-card': PaymentMethod.CREDIT_CARD,
      'paypal': PaymentMethod.PAYPAL,
      'bank-transfer': PaymentMethod.BANK_TRANSFER,
    };

    return paymentMethods[paymentMethodStr.toLowerCase()] || PaymentMethod.UNKNOWN;
  }
}

export default Parser;