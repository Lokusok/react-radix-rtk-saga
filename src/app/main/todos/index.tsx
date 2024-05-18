import { Text } from '@radix-ui/themes';
import CategoryLayout from '@src/containers/category-layout';
import FadeIn from '@src/shared/fade-in';

function TodosPage() {
  return (
    <FadeIn>
      <CategoryLayout title="Иное">
        <Text>Ради теста крутой анимашки :)</Text>
      </CategoryLayout>
    </FadeIn>
  );
}

export default TodosPage;
