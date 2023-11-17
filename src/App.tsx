import { useThemeMode } from '@/hooks/use-theme-mode';
import { Route, Routes } from 'react-router-dom';
import { Playground } from '@/pages/playground';

function App() {
  useThemeMode();

  return (
    <Routes>
      <Route path='/playground' Component={Playground} />
    </Routes>
  );
}

export default App;
