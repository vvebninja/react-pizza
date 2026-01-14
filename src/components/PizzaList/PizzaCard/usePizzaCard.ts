import type { DoughOption, Pizza, SizeOption } from '@/api/pizza.schema';
import { useCartContext } from '@/contexts/cart';
import { useState } from 'react';

export const usePizzaCard = (pizza: Pizza) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { id, imgSrc, title, options, price } = pizza;

  const [selectedDough, setSelectedDough] = useState(
    () => options.dough.find(dough => dough.isAvailable) || options.dough[0],
  );
  const [selectedSize, setSelectedSize] = useState(
    options.sizes.find(size => size.isAvailable) || options.sizes[0],
  );
  const { items: orderedPizza, addItem } = useCartContext();

  const orderedPizzaId = [id, selectedDough, selectedSize].join('-');

  const currentQuantity = orderedPizza.find(pizza => pizza.id === orderedPizzaId)?.quantity;

  const currentPrice = price + selectedDough.extraPrice + selectedSize.extraPrice;

  const handleImageLoad = () => setIsImageLoaded(true);

  const handleDoughClick = (dough: DoughOption) => {
    if (!dough.isAvailable) return;
    setSelectedDough(dough);
  };

  const handleSizeClick = (size: SizeOption) => {
    if (!size.isAvailable) return;
    setSelectedSize(size);
  };

  const handleAddPizzaClick = () => {
    addItem({
      id: orderedPizzaId,
      imgSrc,
      title,
      price: currentPrice,
      dough: selectedDough.name,
      size: selectedSize.value,
      quantity: 1,
    });
  };

  return {
    imgSrc,
    isImageLoaded,
    title,
    options,
    selectedDough,
    selectedSize,
    currentPrice,
    currentQuantity,
    handleImageLoad,
    handleDoughClick,
    handleSizeClick,
    handleAddPizzaClick,
  };
};
