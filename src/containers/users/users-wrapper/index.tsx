import { Box, Flex, Tabs } from '@radix-ui/themes';

import { motion } from 'framer-motion';
import UsersTable from '../users-table';
import UsersSearch from '../users-search';
import UsersCreate from '../users-create';
import OrderToggler from '@src/containers/order-toggler';

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
              <UsersSearch />

              <Box pt="3">
                <OrderToggler />
              </Box>

              <Box pt="3">
                <UsersTable />
              </Box>
            </Tabs.Content>

            <Tabs.Content value="create">
              <Box pt="3">
                <UsersCreate />
              </Box>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </Flex>
    </motion.div>
  );
}

export default UsersWrapper;
