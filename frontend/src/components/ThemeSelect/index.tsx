import { useMode } from '../../theme';
import { IconSun, IconMoon } from '@components/Icons';

export const ThemeSelect = () => {
  const { mode, switchMode } = useMode();
  return (
    <button onClick={switchMode}>
      {mode === 'light' ? (
        <IconSun className=' w-5 text-gray-700' />
      ) : (
        <IconMoon className=' w-5 text-neutral-700' />
      )}
    </button>
  );
};
