import { useThemeMode } from '@/hooks/use-theme-mode';
import { Button } from '@/theme/components';
import { ButtonProps } from '@nextui-org/react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export const ChangeThemeButton = (props: ButtonProps) => {
  const { isDark, toggleThemeMode } = useThemeMode();

  return (
    <Button onClick={toggleThemeMode} startContent={isDark ? <MdLightMode /> : <MdDarkMode />} {...props}>
      {isDark ? 'Light' : 'Dark'}
    </Button>
  );
};
