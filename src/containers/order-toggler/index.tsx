import { Checkbox, Flex, Text } from '@radix-ui/themes';
import { useAppDispatch, useAppSelector } from '@src/store';
import { setOrder } from '@src/store/slices/search';
import { reverseByPage } from '@src/store/slices/users';
import { useEffect } from 'react';

function OrderToggler() {
  const dispatch = useAppDispatch();

  const order = useAppSelector((state) => state.search.order);

  const toggleOrder = () => {
    dispatch(setOrder(order === 'default' ? 'reversed' : 'default'));
  };

  useEffect(() => {
    dispatch(reverseByPage(order));
  }, [dispatch, order]);

  return (
    <Text as="label" size="2">
      <Flex gap="2">
        <Checkbox
          onCheckedChange={toggleOrder}
          checked={order === 'reversed'}
        />
        &nbsp;В обратном порядке
      </Flex>
    </Text>
  );
}

export default OrderToggler;
