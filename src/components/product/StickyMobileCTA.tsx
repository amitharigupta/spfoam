import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const StickyMobileCTA = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass-strong border-t border-border/50 px-4 py-3 safe-area-pb"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <motion.div
        className="flex items-center gap-3"
        animate={{ height: isCollapsed ? 0 : "auto" }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="flex-1 overflow-hidden"
          animate={{ opacity: isCollapsed ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <p className="font-heading font-bold text-foreground text-sm">Aubrey Sofa</p>
          <p className="text-lg font-bold text-foreground">$1,899</p>
        </motion.div>

        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            className="h-12 px-6 md:px-8 rounded-full bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all duration-300 shadow-glow"
            onClick={() => {
              /* Add to cart logic */
            }}
          >
            Add to Cart
          </Button>

          {/* Collapse button */}
          <motion.button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="h-12 w-12 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isCollapsed ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronUp className="h-5 w-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Drag hint */}
      {!isCollapsed && (
        <motion.div
          className="absolute -top-1 left-1/2 -translate-x-1/2 h-1 w-12 rounded-full bg-border/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        />
      )}
    </motion.div>
  );
};

export default StickyMobileCTA;
