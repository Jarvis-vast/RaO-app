// IMessagingService.ts
export interface IMessagingService {
  sendWhatsAppMessage(to: string, templateId: string, payload: any): Promise<boolean>;
  sendSMS(to: string, message: string): Promise<boolean>;
}
