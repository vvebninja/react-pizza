import type { Pizza } from '@/api/pizza.schema';
import { Plus } from '@/assets/icons';
import { Price } from '@/components/Price';
import clsx from 'clsx';
import { ImageSkeleton } from '../PizzaListSkeleton';
import css from './PizzaCard.module.scss';
import { usePizzaCard } from './usePizzaCard';

type PizzaCardProps = {
  pizza: Pizza;
};

export const PizzaCard = ({ pizza }: PizzaCardProps) => {
  const {
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
  } = usePizzaCard(pizza);

  return (
    <div className={css.root}>
      <div className={css.image_wrap}>
        {!isImageLoaded && <ImageSkeleton />}
        <img
          className={clsx(css.image, { [css.is_loaded]: isImageLoaded })}
          src={imgSrc}
          alt={`${title} pizza`}
          height="280"
          width="280"
          loading="lazy"
          onLoad={handleImageLoad}
        />
      </div>
      <h3 className={css.pizza_title}>{title}</h3>
      <div className={css.pizza_options}>
        <ul className={css.group}>
          {options.dough.map(dough => (
            <li key={dough.id}>
              <button
                className={clsx(css.dough_btn, {
                  [css.is_active]: selectedDough.name === dough.name,
                })}
                type="button"
                onClick={() => handleDoughClick(dough)}
                disabled={!dough.isAvailable}
              >
                {dough.name}
              </button>
            </li>
          ))}
        </ul>

        <ul className={css.group}>
          {options.sizes.map(size => (
            <li key={size.id}>
              <button
                className={clsx(css.size_btn, {
                  [css.is_active]: size.value === selectedSize.value && selectedSize.isAvailable,
                })}
                type="button"
                onClick={() => handleSizeClick(size)}
                disabled={!size.isAvailable}
              >
                <span>{size.value}</span>
                <span>cm.</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={css.pizza_footer}>
        <Price
          value={currentPrice}
          size="md"
          color="dark"
        />
        <button
          className={css.add_btn}
          type="button"
          onClick={handleAddPizzaClick}
        >
          <Plus />
          Add
          {currentQuantity && <span className={css.quantity}>{currentQuantity}</span>}
        </button>
      </div>
    </div>
  );
};
