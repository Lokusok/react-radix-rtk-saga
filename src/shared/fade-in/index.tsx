import React, { useId } from 'react';

import { motion } from 'framer-motion';

type TFadeInProps = {
  children: React.ReactNode;
};

function FadeIn({ children }: TFadeInProps) {
  const id = useId();

  return (
    <motion.div
      key={id}
      style={{ position: 'relative', zIndex: 0 }}
      initial={{ opacity: 0, translateY: -100 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: -30 }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
