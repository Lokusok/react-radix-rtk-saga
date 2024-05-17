import React from 'react';
import { Box, Container, Heading, Section } from '@radix-ui/themes';

type TPageLayoutProps = {
  title: string;
  children?: React.ReactNode;
};

function PageLayout(props: TPageLayoutProps) {
  const { children, title } = props;

  return (
    <Container>
      <Section>
        <Heading style={{ fontWeight: 400 }} as="h3">
          Категория:&nbsp;
          <b>{title}</b>
        </Heading>

        <Box pt="3">{children}</Box>
      </Section>
    </Container>
  );
}

export default PageLayout;
