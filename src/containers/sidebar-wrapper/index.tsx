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
    renderText: 'Категория #2',
  },
  {
    key: 3,
    path: '/comments',
    renderText: 'Категория #3',
  },
  {
    key: 4,
    path: '/photos',
    renderText: 'Категория #4',
  },
];

function SidebarWrapper() {
  return <Sidebar titleHref={'/'} links={links} />;
}

export default SidebarWrapper;
