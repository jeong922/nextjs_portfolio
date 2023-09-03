import { useDarkMode } from '@/context/ThemeContext';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

export default function ThemeModeButton() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className='flex items-center justify-center text-xl text-yellow-500 rounded-full outline-none'
    >
      {darkMode ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
    </button>
  );
}
