import './style.css';

import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Separator,
  Tooltip,
} from '@radix-ui/themes';
import { SunMoon } from 'lucide-react';
import { useTheme } from '../../providers/theme';
import { Link } from 'react-router-dom';

type TSidebarProps = {
  links: Array<{ key: string | number; path: string; renderText: string }>;
  titleHref?: string;
};

function Sidebar(props: TSidebarProps) {
  const { links, titleHref } = props;
  const { toggleTheme } = useTheme();

  return (
    <Box height={window.innerHeight + 'px'} className="Sidebar">
      {titleHref ? (
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
            <Button variant="classic" asChild>
              <Link to={link.path}>{link.renderText}</Link>
            </Button>
          ))}
        </Flex>

        <Flex justify="center">
          <Tooltip content="Переключить тему">
            <IconButton
              onClick={toggleTheme}
              radius="full"
              size="3"
              variant="outline"
            >
              <SunMoon width="21" height="21" />
            </IconButton>
          </Tooltip>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Sidebar;
