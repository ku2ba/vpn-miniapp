import { motion } from 'framer-motion';

export default function UserInfo({ user }) {
  if (!user) return null;

  return (
    <motion.div 
      className="glass rounded-2xl p-4 text-center mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.6 }}
    >
      <div className="text-text-muted text-sm">ID пользователя:</div>
      <div className="text-text-primary font-bold text-lg">{user.id}</div>
    </motion.div>
  );
}
