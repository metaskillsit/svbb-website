import { X, Play } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface VideoModalProps {
  videoUrl?: string;
  thumbnailText?: string;
}

const VideoModal = ({ videoUrl, thumbnailText }: VideoModalProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center gap-2 border-2 border-gold/60 text-gold px-8 py-4 rounded-lg font-body font-semibold text-base hover:bg-gold/10 transition-colors"
      >
        <Play size={18} />
        {thumbnailText || t("videoModal.watchVideo")}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-dark/90 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div className="relative w-full max-w-4xl mx-4 aspect-video bg-navy rounded-2xl overflow-hidden border border-gold/30" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-navy/80 text-primary-foreground flex items-center justify-center hover:bg-navy transition-colors"
            >
              <X size={20} />
            </button>
            {videoUrl ? (
              <iframe
                src={videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="SVBB Video"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-primary-foreground/60">
                <Play size={64} className="text-gold mb-4" />
                <p className="font-body text-lg">{t("videoModal.comingSoon")}</p>
                <p className="font-body text-sm mt-2">{t("videoModal.comingSoonDesc")}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default VideoModal;
