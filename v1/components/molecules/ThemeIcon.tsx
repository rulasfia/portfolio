import { useDarkMode } from '../../utils/darkStore';
import MoonIcon from '../atoms/Icon/MoonIcon';
import SunIcon from '../atoms/Icon/SunIcon';

export default function ThemeIcon() {
  const { enabled, toggleTheme } = useDarkMode();

  const onChangeTheme = () => {
    localStorage.setItem('darkMode', JSON.stringify({ enabled: !enabled }));
    toggleTheme(!enabled);
  };

  return (
    <div
      onClick={onChangeTheme}
      className="ml-2 cursor-pointer rounded-md bg-primary-200 p-2 text-primary-800 ring-1 ring-transparent ring-offset-2 ring-offset-transparent transition duration-75 ease-in hover:text-accent-600 hover:ring-accent-600 dark:bg-primary-700 dark:text-primary-100 dark:hover:text-accent-500 dark:hover:ring-accent-500"
    >
      {enabled ? <SunIcon /> : <MoonIcon />}
    </div>
  );
}
