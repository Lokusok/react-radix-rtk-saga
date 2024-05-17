import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as Form from '@radix-ui/react-form';
import { Button } from '@radix-ui/themes';

import { TUser } from '@src/store/slices/users/types';
import { createUserStart } from '@src/store/slices/users';
import { useAppSelector } from '@src/store';

function UsersCreate() {
  const dispatch = useDispatch();
  const waiting = useAppSelector((state) => state.users.waiting);

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
    dispatch(createUserStart(user));
  };

  return (
    <Form.Root onSubmit={handleSubmit} className="FormRoot">
      <Form.Field className="FormField" name="email">
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
            disabled={waiting}
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
            disabled={waiting}
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
            disabled={waiting}
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
          disabled={waiting}
          variant="classic"
          style={{ width: '100%', marginTop: 10 }}
        >
          Создать пользователя
        </Button>
      </Form.Submit>
    </Form.Root>
  );
}

export default UsersCreate;
