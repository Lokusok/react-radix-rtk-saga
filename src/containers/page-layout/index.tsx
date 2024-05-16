import { Heading, Section } from '@radix-ui/themes';

type TPageLayoutProps = {
  title: string;
};

function PageLayout(props: TPageLayoutProps) {
  const { title } = props;

  return (
    <Section>
      <Heading style={{ fontWeight: 400 }} as="h3">
        Категория:&nbsp;
        <b>{title}</b>
      </Heading>
    </Section>
  );
}

export default PageLayout;
