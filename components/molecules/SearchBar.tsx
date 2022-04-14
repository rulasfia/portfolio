interface Props {
  id: string;
  placeholder?: string;
}

export default function SearchBar({ id, placeholder }: Props) {
  return (
    <input
      type="text"
      id={id}
      name={id}
      placeholder={placeholder}
      className="block w-full rounded-md border border-primary-900 bg-primary-800 px-4 py-2 text-primary-900 focus:border-accent-500 focus:ring-accent-500 dark:border-primary-600 dark:text-primary-100"
    />
  );
}
