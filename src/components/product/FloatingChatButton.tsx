import { MessageCircle } from "lucide-react";

const FloatingChatButton = () => (
  <button
    className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 h-14 w-14 rounded-full bg-foreground text-background shadow-glow flex items-center justify-center hover:scale-110 transition-all duration-300"
    aria-label="Need help? Chat with us"
  >
    <MessageCircle className="h-6 w-6" />
  </button>
);

export default FloatingChatButton;
