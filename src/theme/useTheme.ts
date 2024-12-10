import { useContext } from "react";
import { ThemeContext, Theme, LOCAL_STARAGE_THEME_KEY } from "./ThemeContext";


interface UseThemeResult {
	toggleTheme: () => void;
	theme: Theme;
}

export function useTheme(): UseThemeResult{
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
	const nowTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(nowTheme);
	 localStorage.setItem(LOCAL_STARAGE_THEME_KEY, nowTheme)
  };
  return{theme, toggleTheme}
}