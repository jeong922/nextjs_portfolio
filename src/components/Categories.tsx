type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <ul className='flex w-full gap-x-5 p-4 border-b-2 border-b-neutral-300 mb-8'>
      {...categories.map((category) => (
        <li
          className={`${
            selected === category
              ? 'text-rose-300'
              : 'text-neutral-500 dark:text-darkModeText'
          }  cursor-pointer`}
          key={category}
          onClick={() => onClick(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
}
