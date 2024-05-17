import { useEffect } from 'react';
import { Callout, Kbd, Skeleton, Table } from '@radix-ui/themes';
import { useAppDispatch, useAppSelector } from '@src/store';
import { fetchUsersStart } from '@src/store/slices/users';
import { TicketX } from 'lucide-react';

function UsersTable() {
  const dispatch = useAppDispatch();

  const users = useAppSelector((state) => state.users.list);
  const waiting = useAppSelector((state) => state.users.waiting);
  const error = useAppSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(fetchUsersStart());
  }, [dispatch]);

  useEffect(() => {
    if (!error) return;

    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.shiftKey && e.code === 'KeyR') {
        dispatch(fetchUsersStart());
      }
    };

    window.addEventListener('keydown', keyDownHandler);

    return () => window.removeEventListener('keydown', keyDownHandler);
  }, [dispatch, error]);

  if (error) {
    return (
      <Callout.Root color="red">
        <Callout.Icon>
          <TicketX />
        </Callout.Icon>
        <Callout.Text>
          Ошибка. .Нажмите &nbsp;<Kbd>Shift + R</Kbd>,&nbsp; чтобы запросить
          пользователей снова.
        </Callout.Text>
      </Callout.Root>
    );
  }

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Имя пользователя</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Почта</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Адрес</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      {waiting ? (
        <Table.Body>
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <Table.Row key={index}>
                <Table.Cell colSpan={3}>
                  <Skeleton height="20px" />
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      ) : (
        <Table.Body>
          {users.map((user) => (
            <Table.Row key={user.id}>
              <Table.RowHeaderCell>{user.name}</Table.RowHeaderCell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.phone}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      )}
    </Table.Root>
  );
}

export default UsersTable;
