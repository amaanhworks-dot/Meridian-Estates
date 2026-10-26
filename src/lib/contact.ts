import { broker } from '@/broker.config';

function sanitizePhone(phone: string): string {
  return phone.replace(/[^0-9]/g, '');
}

export function whatsappUrl(message: string): string {
  const number = sanitizePhone(broker.contact.whatsapp);
  if (!number) return '';
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function genericWhatsAppUrl(): string {
  const firstName = broker.brand.brokerName.split(' ')[0];
  const area = broker.profile.areaLabel;
  return whatsappUrl(
    `Hi ${firstName}, main aapki website se contact kar raha hoon. Mujhe ${area} mein property options ke baare mein baat karni hai.`
  );
}

export function propertyWhatsAppUrl(propertyTitle: string, configuration: string, location: string): string {
  const firstName = broker.brand.brokerName.split(' ')[0];
  return whatsappUrl(
    `Hi ${firstName}, mujhe ${location} mein listed ${configuration} ${propertyTitle} ke baare mein jaankari chahiye. Kya aap details share kar sakte hain?`
  );
}

export function areaWhatsAppUrl(areaName: string): string {
  const firstName = broker.brand.brokerName.split(' ')[0];
  return whatsappUrl(
    `Hi ${firstName}, mujhe ${areaName} mein available residential properties ke baare mein jaankari chahiye.`
  );
}

export function formWhatsAppUrl(details: {
  name: string;
  phone: string;
  propertyType: string;
  budget: string;
  locality: string;
  message: string;
}): string {
  const firstName = broker.brand.brokerName.split(' ')[0];
  const lines = [
    `Hi ${firstName}, main aapki website se enquiry bhej raha hoon:`,
    ``,
    `Name: ${details.name}`,
    `Phone: ${details.phone}`,
    `Property Type: ${details.propertyType}`,
    `Budget: ${details.budget}`,
    `Preferred Locality: ${details.locality}`,
  ];
  if (details.message) {
    lines.push(`Message: ${details.message}`);
  }
  return whatsappUrl(lines.join('\n'));
}

export function phoneUrl(): string {
  if (!broker.contact.phone) return '';
  return `tel:${broker.contact.phone.replace(/\s/g, '')}`;
}

export function mapUrl(): string {
  return broker.contact.mapLink || '';
}
