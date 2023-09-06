type Props = {
  category: string;
  size?: 'sm' | 'md' | 'lg' | 'lx';
};

export default function CategoryUI({ category, size = 'md' }: Props) {
  const getSize = (size: string) => {
    switch (size) {
      case 'sm':
        return 'text-[0.5rem]';
      case 'md':
        return 'text-base';
      case 'lg':
        return 'text-lg';
      case 'lx':
        return 'text-xl';
    }
  };

  return (
    <>
      {category === 'React' && (
        <span className={`${getSize(size)} bg-React text-white p-1 rounded-md`}>
          {category}
        </span>
      )}

      {category === 'TS' && (
        <span
          className={`${getSize(
            size
          )} text-[0.5rem] bg-TS text-white p-1 rounded-md`}
        >
          {category}
        </span>
      )}

      {category === 'JS' && (
        <span
          className={`${getSize(
            size
          )} text-[0.5rem] bg-JS text-white p-1 rounded-md`}
        >
          {category}
        </span>
      )}

      {category === 'NextJS' && (
        <span
          className={`${getSize(
            size
          )} text-[0.5rem] bg-NextJS text-white p-1 rounded-md`}
        >
          {category}
        </span>
      )}
    </>
  );
}
