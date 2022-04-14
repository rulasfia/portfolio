import SunIcon from '../atoms/Icon/SunIcon';

export default function ThemeIcon() {
  return (
    <div className="ml-2 cursor-pointer rounded-md bg-primary-700 p-2 text-primary-100 ring-1 ring-transparent ring-offset-2 ring-offset-transparent transition duration-75 ease-in hover:text-accent-500 hover:ring-accent-500">
      <SunIcon />
    </div>
  );
}
