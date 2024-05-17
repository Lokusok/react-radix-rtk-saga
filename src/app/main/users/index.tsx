import CategoryLayout from '@src/containers/category-layout';
import UsersWrapper from '@src/containers/users-wrapper';
import FadeIn from '@src/shared/fade-in';

function UsersPage() {
  return (
    <FadeIn>
      <CategoryLayout title="Пользователи">
        <UsersWrapper />
      </CategoryLayout>
    </FadeIn>
  );
}

export default UsersPage;
