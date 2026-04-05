import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat bubble */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 h-14 w-14 rounded-full bg-foreground text-background shadow-glow flex items-center justify-center hover:scale-110 transition-all duration-300"
        aria-label="Need help? Chat with us"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </motion.div>
      </motion.button>

      {/* Chat panel */}
      {isOpen && (
        <motion.div
          className="fixed bottom-32 md:bottom-24 right-4 md:right-8 z-50 w-80 bg-card border border-border rounded-2xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="bg-foreground text-background p-4 flex items-center justify-between">
            <h3 className="font-heading font-semibold">Chat with us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-background/10 rounded transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Message area */}
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex-1 bg-muted rounded-lg p-3 text-sm text-foreground">
                Hi! 👋 How can we help you today?
              </div>
            </motion.div>

            {/* Quick replies */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {[
                "Product details",
                "Shipping & returns",
                "Fabric samples",
                "Custom order",
              ].map((reply) => (
                <motion.button
                  key={reply}
                  className="w-full text-left px-3 py-2 rounded-lg bg-muted hover:bg-muted/80 text-sm text-foreground transition-colors"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {reply}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Input */}
          <div className="border-t border-border p-3 flex gap-2">
            <input
              type="text"
              placeholder="Type message..."
              className="flex-1 px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20"
            />
            <motion.button
              className="px-3 py-2 rounded-lg bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send
            </motion.button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default FloatingChatButton;
