import * as Form from '@radix-ui/react-form';
import { Button } from '@radix-ui/themes';

function UsersCreate() {
  return (
    <Form.Root className="FormRoot">
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
            className="Input"
            type="tel"
            placeholder="Телефон пользователя"
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <Button variant="classic" style={{ width: '100%', marginTop: 10 }}>
          Создать пользователя
        </Button>
      </Form.Submit>
    </Form.Root>
  );
}

export default UsersCreate;
