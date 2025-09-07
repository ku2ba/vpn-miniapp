import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function ModalPortal({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  // Отладка - проверим, что portal работает
  console.log('ModalPortal rendering to document.body');

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
        style={{ 
          zIndex: 9999,
          position: 'fixed !important',
          top: '0 !important',
          left: '0 !important',
          right: '0 !important',
          bottom: '0 !important',
          width: '100vw !important',
          height: '100vh !important',
          backgroundColor: 'rgba(0, 0, 0, 0.4) !important',
          backdropFilter: 'blur(8px) !important',
          display: 'flex !important',
          alignItems: 'center !important',
          justifyContent: 'center !important',
          padding: '1rem !important',
          margin: '0 !important'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="glass-strong rounded-2xl p-6 w-full max-w-sm relative"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(25px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '1rem',
            padding: '1.5rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
            width: '100%',
            maxWidth: '24rem',
            position: 'relative'
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
