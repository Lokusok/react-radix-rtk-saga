import CategoryLayout from '@src/containers/category-layout';
import FadeIn from '@src/shared/fade-in';

function TodosPage() {
  return (
    <FadeIn>
      <CategoryLayout title="Список дел"></CategoryLayout>
    </FadeIn>
  );
}

export default TodosPage;
