import React from 'react';
import { Heading, Section } from '@radix-ui/themes';

type TPageLayoutProps = {
  title: string;
  children?: React.ReactNode;
};

function PageLayout(props: TPageLayoutProps) {
  const { children, title } = props;

  return (
    <Section>
      <Heading style={{ fontWeight: 400 }} as="h3">
        Категория:&nbsp;
        <b>{title}</b>
      </Heading>

      {children}
    </Section>
  );
}

export default PageLayout;
