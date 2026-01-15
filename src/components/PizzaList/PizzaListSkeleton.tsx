import Skeleton from 'react-loading-skeleton';
import css from './PizzaList.module.scss';

export const ImageSkeleton = () => (
  <Skeleton
    circle
    width={260}
    height={260}
  />
);

export const PizzaListSkeleton = ({ cardItems }: { cardItems: number }) => {
  const skeletonItems = Array(cardItems).fill(0);

  return (
    <ul className={css.root}>
      {skeletonItems.map((_, index) => (
        <li
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <ImageSkeleton />
          <Skeleton
            width={140}
            height={24}
          />
          <Skeleton
            width={280}
            height={88}
            borderRadius={12}
          />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Skeleton
              width={50}
              height={30}
            />

            <Skeleton
              width={130}
              height={40}
              borderRadius={'1.75rem'}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
