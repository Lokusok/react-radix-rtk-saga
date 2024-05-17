export type TSearchInitialState = {
  searchQuery: string;
  order: TOrder;
};

export type TOrder = 'default' | 'reversed';
