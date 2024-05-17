import { Flex, IconButton, Table, Tooltip } from '@radix-ui/themes';
import { TUser } from '@src/store/slices/users/types';
import { Pencil, Trash2 } from 'lucide-react';
import UserDeleteDialogAssert from './user-delete-dialog-assert';
import UserEditDialog from './user-edit-dialog';

type TUserRowPropsViaDialog =
  | {
      deleteByDialog: true;
      onDialogReject: () => void;
    }
  | {
      deleteByDialog?: never;
      onDialogReject?: never;
    };

type TUserRowPropsDefault = {
  user: TUser;
  onEditActionClick: () => void;
  onDeleteActionClick?: () => void;
  onDelete: () => void;
  onEdit: (user: TUser) => void;
  disableButtons?: boolean;
};

type TUserRowProps = TUserRowPropsViaDialog & TUserRowPropsDefault;

function UserRow(props: TUserRowProps) {
  const {
    user,
    onEditActionClick,
    onDeleteActionClick,
    deleteByDialog,
    onDelete,
    onEdit,
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
          <UserEditDialog
            onReject={onDialogReject}
            onSuccess={onEdit}
            user={user}
            renderTrigger={() => (
              <IconButton
                disabled={disableButtons}
                onClick={onEditActionClick}
                size="2"
                radius="full"
                color="blue"
              >
                <Pencil width="18" />
              </IconButton>
            )}
          />
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
