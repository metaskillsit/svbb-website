import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/6591234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="text-white" size={28} fill="white" strokeWidth={0} />
    </a>
  );
};

export default WhatsAppButton;
