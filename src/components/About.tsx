import CategoryUI from './UI/CategoryUI';

// 들어갈 내용을 좀 생각해보자...

export default function About() {
  return (
    <section className='max-w-screen-2xl mx-auto p-4'>
      <div className='p-4 bg-[#6B648B] rounded-md text-darkModeText text-lg flex items-center justify-center'>
        <div className='gap-x-4'>
          <CategoryUI category='JS' />
          <CategoryUI category='TS' />
          <CategoryUI category='React' />
          <CategoryUI category='NextJS' />
        </div>
      </div>
    </section>
  );
}
