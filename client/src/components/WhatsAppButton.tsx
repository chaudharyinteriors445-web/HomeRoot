import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';


interface WhatsAppButtonProps {
  message?: string;
  productName?: string;
  floating?: boolean;
}

const WA_NUMBER = '+919358383671';

export default function WhatsAppButton({ 
  message, 
  productName,
  floating = false 
}: WhatsAppButtonProps) {
  const defaultMessage = productName 
    ? `Hi! I'm interested in ordering ${productName} from Home Root Farms. Please share more details.`
    : 'Hi! I would like to know more about your organic atta products.';
  
  const whatsappUrl = `https://wa.me/${WA_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message || defaultMessage)}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  if (floating) {
    return (
      <button
        onClick={handleClick}
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow hover-elevate"
        aria-label="Contact on WhatsApp"
        data-testid="button-whatsapp-floating"
      >
        <SiWhatsapp className="h-7 w-7" />
      </button>
    );
  }

  return (
    <Button 
      onClick={handleClick}
      className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2"
      data-testid="button-whatsapp-order"
    >
      <SiWhatsapp className="h-5 w-5" />
      Order via WhatsApp
    </Button>
  );
}
