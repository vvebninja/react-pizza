export type Pizza = {
  id: number;
  imgSrc: string;
  title: string;
  doughTypes: string[];
  sizes: number[];
  price: number;
};

export type OrderedPizza = {
  id: number;
  title: string;
  doughType: string;
  size: number;
  price: number;
  quantity: number;
};
