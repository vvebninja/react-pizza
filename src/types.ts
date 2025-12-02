export type Pizza = {
  id: number;
  imgSrc: string;
  title: string;
  doughTypes: string[];
  sizes: number[];
  price: number;
};

export type OrderedPizza = {
  id: string;
  imgSrc: string;
  title: string;
  doughType: string;
  size: number;
  price: number;
  totalPrice: number;
  quantity: number;
};
