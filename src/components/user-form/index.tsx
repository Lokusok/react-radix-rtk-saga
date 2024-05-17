import * as Form from '@radix-ui/react-form';
import { Button } from '@radix-ui/themes';
import { TUser } from '@src/store/slices/users/types';
import React, { useState } from 'react';

type TUserFormProps = {
  onSubmit: (user: TUser) => void;
  disabled?: boolean;
};

function UserForm(props: TUserFormProps) {
  const { onSubmit, disabled } = props;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user: TUser = {
      id: crypto.randomUUID(),
      name,
      email,
      phone,
    };

    onSubmit(user);
  };

  return (
    <Form.Root onSubmit={handleSubmit} className="FormRoot">
      <Form.Field className="FormField" name="username">
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
          }}
        >
          <Form.Label className="FormLabel">Имя</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Введите имя пользователя
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Введите корректное имя пользователя
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            disabled={disabled}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="Input"
            type="text"
            placeholder="Иванов Иван"
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="FormField" name="email">
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
          }}
        >
          <Form.Label className="FormLabel">Почта</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Введите почту пользователя
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Введите корректную почту пользователя
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            disabled={disabled}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="Input"
            type="email"
            placeholder="Почта пользователя"
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="FormField" name="email">
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
          }}
        >
          <Form.Label className="FormLabel">Телефон</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Введите телефон пользователя
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Введите корректный телефон пользователя
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            disabled={disabled}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="Input"
            type="tel"
            placeholder="Телефон пользователя"
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <Button
          disabled={disabled}
          variant="classic"
          style={{ width: '100%', marginTop: 10 }}
        >
          Создать пользователя
        </Button>
      </Form.Submit>
    </Form.Root>
  );
}

export default UserForm;
