import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { useTranslation } from 'react-i18next';
import logoWhatsApp from '../logoWhatsApp.jpg'

export default function FloatingWhatsAppButton() {
  const { t } = useTranslation();

  return (
    <FloatingWhatsApp 
      phoneNumber="491728551010"
      accountName="Rabbiner David Goldberg"
    //   statusMessage=""
      chatMessage={t('FloatingWhatsAppButton.chatMessage')}
      avatar={logoWhatsApp}
      allowClickAway
      notification
      notificationSound
    />
  );
}
