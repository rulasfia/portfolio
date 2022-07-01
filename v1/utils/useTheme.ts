import { useEffect } from 'react';
import { useDarkMode } from './darkStore';

export function useTheme() {
  const { enabled, toggleTheme } = useDarkMode();

  useEffect(() => {
    // get dark mode preference
    const value = localStorage.getItem('darkMode');
    // check if there is dark mode preference
    if (value) {
      // parse to js object
      const dark = JSON.parse(value);
      // if dark mode preference value different than current dark mode setting, change current setting
      if (dark.enabled !== enabled) toggleTheme(dark.enabled);
    }
  }, [enabled, toggleTheme]);

  return enabled;
}
