import * as Form from '@radix-ui/react-form';
import {
  Button,
  Dialog,
  Flex,
  Text,
  TextField,
  Tooltip,
} from '@radix-ui/themes';
import { TUser } from '@src/store/slices/users/types';
import React, { useRef, useState } from 'react';

type TUserChangeDialogProps = {
  renderTrigger: () => React.ReactNode;
  onReject?: () => void;
  onSuccess: (user: TUser) => void;
  user: TUser;
};

function UserEditDialog(props: TUserChangeDialogProps) {
  const { renderTrigger, onReject, onSuccess, user } = props;

  const [name, setName] = useState(() => user.name);
  const [email, setEmail] = useState(() => user.email);
  const [phone, setPhone] = useState(() => user.phone);

  const formRef = useRef<HTMLFormElement>(null);
  const closeBtnRef = useRef<HTMLDivElement>(null);

  const isSubmitButtonDisabled = [name, email, phone].some(
    (val) => !val.length
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser: TUser = {
      id: user.id,
      name,
      email,
      phone,
    };

    onSuccess(newUser);
  };

  const handleSubmitButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const isFormValid = formRef.current?.checkValidity();
    if (!isFormValid) return;

    closeBtnRef.current?.click();
  };

  return (
    <Dialog.Root
      onOpenChange={(isOpen) => Boolean(isOpen) === false && onReject?.()}
    >
      <Tooltip content="Удалить">
        <Tooltip content="Удалить пользователя">
          <Tooltip content="Изменить">
            <Dialog.Trigger>{renderTrigger()}</Dialog.Trigger>
          </Tooltip>
        </Tooltip>
      </Tooltip>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Изменить пользователя</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Введите обновлённые данные пользователя <b>{user.name}</b>.
        </Dialog.Description>

        <Form.Root ref={formRef} onSubmit={handleSubmit}>
          <Flex direction="column" gap="3">
            <Form.Field name="username">
              <Form.Label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Имя
                </Text>
              </Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Введите имя пользователя
              </Form.Message>
              <Form.Message className="FormMessage" match="typeMismatch">
                Введите корректное имя пользователя
              </Form.Message>

              <Form.Control asChild>
                <TextField.Root
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder={'Имя пользователя'}
                />
              </Form.Control>
            </Form.Field>
            <Form.Field name="email">
              <Form.Label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Почта
                </Text>
              </Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Введите почту пользователя
              </Form.Message>
              <Form.Message className="FormMessage" match="typeMismatch">
                Введите корректную почту пользователя
              </Form.Message>

              <Form.Control asChild>
                <TextField.Root
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder={'Почта пользователя'}
                />
              </Form.Control>
            </Form.Field>
            <Form.Field name="phone">
              <Form.Label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Телефон
                </Text>
              </Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Введите телефон пользователя
              </Form.Message>
              <Form.Message className="FormMessage" match="typeMismatch">
                Введите корректный телефон пользователя
              </Form.Message>

              <Form.Control asChild>
                <TextField.Root
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  placeholder={'Телефон пользователя'}
                />
              </Form.Control>
            </Form.Field>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="classic" color="gray">
                Отмена
              </Button>
            </Dialog.Close>
            <Form.Submit asChild>
              <>
                <Dialog.Close disabled={isSubmitButtonDisabled}>
                  <div ref={closeBtnRef}></div>
                </Dialog.Close>

                <Button
                  disabled={isSubmitButtonDisabled}
                  onClick={handleSubmitButtonClick}
                  variant="classic"
                  color="indigo"
                >
                  Изменить
                </Button>
              </>
            </Form.Submit>
          </Flex>
        </Form.Root>
      </Dialog.Content>
    </Dialog.Root>
  );
}

export default UserEditDialog;
