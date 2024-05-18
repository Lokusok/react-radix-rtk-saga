import FadeIn from '@src/shared/fade-in';
import CategoryLayout from '../../../containers/category-layout';
import { Text } from '@radix-ui/themes';

function CommentsPage() {
  return (
    <FadeIn>
      <CategoryLayout title="Иное">
        <Text>Ради теста крутой анимашки :)</Text>
      </CategoryLayout>
    </FadeIn>
  );
}

export default CommentsPage;
