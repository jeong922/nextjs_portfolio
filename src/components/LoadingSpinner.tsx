export default function LoadingSpinner() {
  return (
    <div className='flex items-center justify-center'>
      <div className='relative w-16 h-16 border-4 border-black border-solid rounded-full opacity-10 '></div>
      <div className='absolute w-16 h-16 border-b-4 border-r-4 border-solid rounded-full border-rose-300 opacity-70 animate-spin'></div>
    </div>
  );
}
