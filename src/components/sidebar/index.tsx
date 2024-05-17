import './style.css';

import { Box, Button, Flex, Heading, Separator } from '@radix-ui/themes';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggler from '@src/containers/theme-toggler';

type TSidebarProps = {
  links: Array<{ key: string | number; path: string; renderText: string }>;
  titleHref?: string;
};

function Sidebar(props: TSidebarProps) {
  const { links, titleHref } = props;

  const location = useLocation();

  return (
    <Box className="Sidebar">
      {titleHref && location.pathname !== titleHref ? (
        <Heading
          className="Sidebar-title Sidebar-title--anim"
          align="center"
          as="h1"
          asChild
        >
          <Link to={titleHref}>RTK + Saga</Link>
        </Heading>
      ) : (
        <Heading className="Sidebar-title " align="center" as="h1">
          RTK + Saga
        </Heading>
      )}

      <Separator my="3" size="4" />

      <Flex
        height="90%"
        className="Sidebar-nav"
        direction="column"
        justify="between"
      >
        <Flex className="Sidebar-inner-nav" direction="column" gap="3">
          {links.map((link) => (
            <Button
              disabled={link.path === location.pathname}
              key={link.key}
              variant="classic"
              asChild
            >
              <Link to={link.path}>{link.renderText}</Link>
            </Button>
          ))}
        </Flex>

        <Flex justify="center">
          <ThemeToggler />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Sidebar;
