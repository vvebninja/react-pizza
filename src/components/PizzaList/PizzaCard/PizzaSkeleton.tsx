import Skeleton from 'react-loading-skeleton';

export const ImageSkeleton = () => (
  <Skeleton
    circle
    width={260}
    height={260}
  />
);

export const PizzaSkeleton = ({ cardItems }: { cardItems: number }) => {
  const skeletonItems = Array(cardItems).fill(0);

  return skeletonItems.map((_, index) => (
    <li
      key={index}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <Skeleton
        circle
        width={260}
        height={260}
      />
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
  ));
};
