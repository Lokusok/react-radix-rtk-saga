import { Box, Flex, Tabs, TextField } from '@radix-ui/themes';
import { Search } from 'lucide-react';

import { motion } from 'framer-motion';
import UsersTable from '../users-table';

function UsersWrapper() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Flex direction="column" gap="4" pb="2">
        <Tabs.Root defaultValue="view">
          <Tabs.List size="2">
            <Tabs.Trigger value="view">Просмотр</Tabs.Trigger>
            <Tabs.Trigger value="create">Создание</Tabs.Trigger>
          </Tabs.List>

          <Box pt="3">
            <Tabs.Content value="view">
              <TextField.Root placeholder="Поиск по любому полю">
                <TextField.Slot>
                  <Search height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
              <Box pt="3">
                <UsersTable />
              </Box>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </Flex>
    </motion.div>
  );
}

export default UsersWrapper;
