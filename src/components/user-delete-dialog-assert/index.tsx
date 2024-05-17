import {
  Button,
  Dialog,
  Flex,
  Text,
  TextField,
  Tooltip,
} from '@radix-ui/themes';
import { TUser } from '@src/store/slices/users/types';
import React, { useState } from 'react';

type TUserDeleteDialogAssertProps = {
  renderTrigger: () => React.ReactNode;
  onSuccess: () => void;
  onReject?: () => void;
  user: TUser;
};

function UserDeleteDialogAssert(props: TUserDeleteDialogAssertProps) {
  const { user, renderTrigger, onSuccess, onReject } = props;

  const [assertUsername, setAssertUsername] = useState('');

  const isSubmitButtonDisabled = assertUsername.localeCompare(user.name) !== 0;

  return (
    <Dialog.Root
      onOpenChange={(isOpen) => Boolean(isOpen) === false && onReject?.()}
    >
      <Tooltip content="Удалить">
        <Tooltip content="Удалить пользователя">
          <Dialog.Trigger>{renderTrigger()}</Dialog.Trigger>
        </Tooltip>
      </Tooltip>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Удалить пользователя</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Введите имя пользователя <b>{user.name}</b> для подтверждения
          удаления.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Имя
            </Text>
            <TextField.Root
              value={assertUsername}
              onChange={(e) => setAssertUsername(e.target.value)}
              placeholder={user.name}
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="classic" color="gray">
              Отмена
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button
              disabled={isSubmitButtonDisabled}
              onClick={onSuccess}
              variant="classic"
              color="red"
            >
              Удалить
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}

export default UserDeleteDialogAssert;
