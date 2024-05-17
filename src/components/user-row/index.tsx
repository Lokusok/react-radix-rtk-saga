import { Flex, IconButton, Table, Tooltip } from '@radix-ui/themes';
import { TUser } from '@src/store/slices/users/types';
import { Pencil, Trash2 } from 'lucide-react';
import UserDeleteDialogAssert from '../user-delete-dialog-assert';

type TUserRowProps = {
  user: TUser;
  onEditActionClick: () => void;
  onDeleteActionClick?: () => void;
  onDelete: () => void;
  onDialogReject?: () => void;
  deleteByDialog?: boolean;
  disableButtons?: boolean;
};

function UserRow(props: TUserRowProps) {
  const {
    user,
    onEditActionClick,
    onDeleteActionClick,
    deleteByDialog,
    onDelete,
    disableButtons,
    onDialogReject,
  } = props;

  return (
    <Table.Row key={user.id}>
      <Table.RowHeaderCell>{user.name}</Table.RowHeaderCell>
      <Table.Cell>{user.email}</Table.Cell>
      <Table.Cell>{user.phone}</Table.Cell>
      <Table.Cell>
        <Flex gap="2">
          <Tooltip content="Изменить">
            <IconButton
              disabled={disableButtons}
              onClick={onEditActionClick}
              size="2"
              radius="full"
              color="blue"
            >
              <Pencil width="18" />
            </IconButton>
          </Tooltip>
          {deleteByDialog ? (
            <UserDeleteDialogAssert
              user={user}
              onSuccess={onDelete}
              onReject={onDialogReject}
              renderTrigger={() => (
                <IconButton
                  disabled={disableButtons}
                  size="2"
                  onClick={onDeleteActionClick ?? (() => {})}
                  radius="full"
                  color="red"
                >
                  <Trash2 width="18" />
                </IconButton>
              )}
            />
          ) : (
            onDelete && (
              <Tooltip content="Удалить пользователя">
                <IconButton
                  disabled={disableButtons}
                  onClick={onDelete}
                  size="2"
                  radius="full"
                  color="red"
                >
                  <Trash2 width="18" />
                </IconButton>
              </Tooltip>
            )
          )}
        </Flex>
      </Table.Cell>
    </Table.Row>
  );
}

export default UserRow;
