import { BASE_URL } from '@src/store/shared/api';
import { TUser } from '../types';

/**
 * Запрос всех пользователей
 */
export async function fetchUsers(searchQuery: string) {
  const res = await fetch(`${BASE_URL}/users?q=${searchQuery}`);
  const json = await res.json();

  return json;
}

/**
 * Создание пользователя
 */
export async function createUser(user: TUser) {
  const res = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
  const json = await res.json();

  return json;
}

/**
 * Удаление пользователя
 */
export async function deleteUser(userId: string) {
  await fetch(`${BASE_URL}/users/${userId}`, {
    method: 'DELETE',
  });
}

/**
 * Полное обновление пользователя
 */
export async function editUser(user: TUser) {
  const res = await fetch(`${BASE_URL}/users/${user.id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
  const json = await res.json();

  return json;
}
