type Props = {
  category: string;
};

export default function CategoryUI({ category }: Props) {
  console.log(category);
  return (
    <>
      {category === 'React' && (
        <span className={`text-xs bg-React text-white p-1 rounded-md`}>
          {category}
        </span>
      )}

      {category === 'TS' && (
        <span className={`text-xs bg-TS text-white p-1 rounded-md`}>
          {category}
        </span>
      )}

      {category === 'JS' && (
        <span className={`text-xs bg-JS text-white p-1 rounded-md`}>
          {category}
        </span>
      )}

      {category === 'NextJS' && (
        <span className={`text-xs bg-NextJS text-white p-1 rounded-md`}>
          {category}
        </span>
      )}
    </>
  );
}
