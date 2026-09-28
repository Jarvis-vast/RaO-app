// IPaymentService.ts
export interface IPaymentService {
  createPaymentLink(bookingId: string, amount: number): Promise<string>;
  verifyPayment(paymentRef: string): Promise<boolean>;
  processRefund(paymentId: string): Promise<boolean>;
}
