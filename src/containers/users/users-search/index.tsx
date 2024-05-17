import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Search } from 'lucide-react';

import { TextField } from '@radix-ui/themes';

import { setSearchQuery } from '@src/store/slices/search';
import { useAppSelector } from '@src/store';

function UsersSearch() {
  const dispatch = useDispatch();
  const searchQuery = useAppSelector((state) => state.search.searchQuery);

  const [search, setSearch] = useState(() => searchQuery);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSearchQuery(search));
    }, 500);

    return () => clearTimeout(timer);
  }, [dispatch, search]);

  return (
    <TextField.Root
      value={search}
      onChange={handleChange}
      placeholder="Поиск по любому полю"
    >
      <TextField.Slot>
        <Search height="16" width="16" />
      </TextField.Slot>
    </TextField.Root>
  );
}

export default UsersSearch;
