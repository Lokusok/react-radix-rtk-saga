import { IconButton, Tooltip } from '@radix-ui/themes';
import { useTheme } from '@src/providers/theme';
import { Sun, Moon } from 'lucide-react';

function ThemeToggler() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Tooltip content="Переключить тему">
      <IconButton
        onClick={toggleTheme}
        radius="full"
        size="3"
        variant="outline"
      >
        {theme === 'light' ? (
          <Sun width="21" height="21" />
        ) : (
          <Moon width="21" height="21" />
        )}
      </IconButton>
    </Tooltip>
  );
}

export default ThemeToggler;
