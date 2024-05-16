import React from 'react';
import { Heading, Section } from '@radix-ui/themes';
import { motion } from 'framer-motion';

type TPageLayoutProps = {
  title: string;
  children?: React.ReactNode;
};

function PageLayout(props: TPageLayoutProps) {
  const { children, title } = props;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: -100 }}
      animate={{ opacity: 1, translateY: 0 }}
    >
      <Section>
        <Heading as="h3">{title}</Heading>
        {children}
      </Section>
    </motion.div>
  );
}

export default PageLayout;
