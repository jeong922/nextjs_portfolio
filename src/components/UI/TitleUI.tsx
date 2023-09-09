type Props = {
  text: string;
};

export default function TitleUI({ text }: Props) {
  return (
    <h2 className='text-xl text-neutral-700 font-semibold dark:text-darkModeText p-4 border-b-2 border-b-neutral-300 dark:border-b-neutral-500 mb-8'>
      {text}
    </h2>
  );
}
