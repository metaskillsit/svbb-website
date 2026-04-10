import { useTranslation } from "react-i18next";

const WhatsAppButton = () => {
  const { t } = useTranslation();

  return (
    <a
      href="https://wa.me/6589483482"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_6px_28px_rgba(37,211,102,0.5)] transition-all duration-200">
          <svg viewBox="0 0 32 32" fill="white" width="30" height="30">
            <path d="M16.004 3.2C9.042 3.2 3.4 8.842 3.4 15.804c0 2.226.58 4.4 1.684 6.318L3.2 28.8l6.876-1.804A12.56 12.56 0 0 0 16.004 28.4c6.962 0 12.596-5.634 12.596-12.596S22.966 3.2 16.004 3.2zm0 22.996a10.36 10.36 0 0 1-5.282-1.446l-.38-.224-3.932 1.032 1.05-3.838-.248-.394a10.34 10.34 0 0 1-1.588-5.522c0-5.73 4.664-10.394 10.394-10.394 5.73 0 10.394 4.664 10.394 10.394-.014 5.73-4.678 10.392-10.408 10.392zm5.702-7.784c-.312-.156-1.85-.912-2.138-1.018-.288-.104-.498-.156-.708.156s-.812 1.018-.996 1.228c-.184.208-.368.234-.68.078-.312-.156-1.318-.486-2.51-1.548-.928-.826-1.554-1.846-1.736-2.158-.182-.312-.02-.48.136-.636.142-.14.312-.364.468-.546.156-.184.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.708-1.708-.97-2.338-.256-.614-.516-.53-.708-.54l-.604-.01c-.208 0-.546.078-.832.39-.286.312-1.092 1.068-1.092 2.604s1.118 3.02 1.274 3.228c.156.208 2.2 3.358 5.33 4.71.744.322 1.326.514 1.778.658.748.238 1.428.204 1.966.124.6-.09 1.85-.756 2.112-1.486.26-.73.26-1.356.182-1.486-.078-.13-.288-.208-.6-.364z"/>
          </svg>
        </div>
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-foreground text-background text-xs font-body font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          {t("whatsApp.tooltip")}
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
