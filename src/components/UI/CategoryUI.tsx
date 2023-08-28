type Props = {
  category: string;
};

export default function CategoryUI({ category }: Props) {
  return (
    <>
      {category === 'React' && (
        <span className={`text-[0.5rem] bg-React text-white p-1 rounded-md`}>
          {category}
        </span>
      )}

      {category === 'TS' && (
        <span className={`text-[0.5rem] bg-TS text-white p-1 rounded-md`}>
          {category}
        </span>
      )}

      {category === 'JS' && (
        <span className={`text-[0.5rem] bg-JS text-white p-1 rounded-md`}>
          {category}
        </span>
      )}

      {category === 'NextJS' && (
        <span className={`text-[0.5rem] bg-NextJS text-white p-1 rounded-md`}>
          {category}
        </span>
      )}
    </>
  );
}
