
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="border-bengali-gold/20 hover:border-bengali-gold hover:bg-bengali-gold/10 transition-all duration-300"
    >
      {theme === 'light' ? (
        <Moon className="h-4 w-4 text-bengali-red" />
      ) : (
        <Sun className="h-4 w-4 text-bengali-gold" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
