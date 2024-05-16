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
      style={{ position: 'relative', zIndex: 0 }}
      initial={{ opacity: 0, translateY: -100 }}
      animate={{ opacity: 1, translateY: 0 }}
    >
      <Section>
        <Heading style={{ fontWeight: 400 }} as="h3">
          Категория:&nbsp;
          <b>{title}</b>
        </Heading>

        {children}
      </Section>
    </motion.div>
  );
}

export default PageLayout;
