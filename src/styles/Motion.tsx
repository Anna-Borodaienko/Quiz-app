import { motion, MotionProps } from 'framer-motion';
import React, { PropsWithChildren } from 'react';

const Motion: React.FC<PropsWithChildren<MotionProps>> = ({ children }) => (
  <>
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}>
      {children}
    </motion.div>
  </>
);

export default Motion;
