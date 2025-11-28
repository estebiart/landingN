import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/+573218113200", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 bg-secondary hover:bg-secondary/90 text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-all duration-300 group animate-float"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" />
      <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
        Asesoría
      </span>
    </button>
  );
};

export default WhatsAppButton;
