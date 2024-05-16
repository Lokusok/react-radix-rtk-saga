import Sidebar from '../../components/sidebar';

const links = [
  {
    key: 1,
    path: '/users',
    renderText: 'Пользователи',
  },
  {
    key: 2,
    path: '/todos',
    renderText: 'Список дел',
  },
  {
    key: 3,
    path: '/comments',
    renderText: 'Комментарии',
  },
  {
    key: 4,
    path: '/photos',
    renderText: 'Фотографии',
  },
];

function SidebarWrapper() {
  return <Sidebar titleHref={'/'} links={links} />;
}

export default SidebarWrapper;
