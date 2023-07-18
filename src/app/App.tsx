import { Suspense } from 'react';
import { AppRouter } from 'app/providers/Router';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar/ui/';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ui';
import { Sidebar } from 'widgets/Sidebar';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import './styles/index.scss';

export default function App() {
  const { theme } = useTheme();
  console.log(theme, theme);

  return (
    <div className={`app ${theme}`}>
      <Suspense fallback="">
        <ThemeSwitcher />
        <LangSwitcher />
        <Navbar />
        <div className="appContainer">
          <Sidebar />
          <div className="pageContainer">
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  );
}
