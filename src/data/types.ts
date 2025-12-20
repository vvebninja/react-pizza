export type Pizza = {
  id: number | string;
  imgSrc: string;
  title: string;
  doughTypes: string[];
  sizes: number[];
  price: number;
};

export type OrderedPizza = Omit<Pizza, 'doughTypes' | 'sizes'> & {
  doughType: string;
  size: number;
  quantity: number;
};
