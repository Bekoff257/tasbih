import './App.css';
import Main from './components/main/Main';
import Maruzalar from './components/maruzalar/Maruzalar';
import Navbar from './components/nav/Navbar';
import { Routes, Route } from 'react-router-dom';
import Zikrs from './components/zikrs/Zikrs';
import Counter from './components/counter/Counter';
import Surah from './components/surah/Surah';
import Settings from './components/settings/Settings';
import OfflineMessage from './components/offline/Offline';
import Live from "./components/live/Live"
import Duolar from './components/duolar/Duolar';
import Tasbih from './components/tasbih/Tasbih';
import BlogBanner from './components/blog_banner/BlogBanner';

function App() {
  const isOffline = !window.navigator.onLine;

  return (
    <div className="App">
      {isOffline && <OfflineMessage/>}
      <BlogBanner />
      <Counter />
      <Navbar/>
      <Routes>
        <Route path='/tasbeh' element={<Tasbih />}/>
        <Route path='/' element={<Main />}/>
        <Route path='/suralar' element={<Surah />}/>
        <Route path='/duolar' element={<Duolar />} />
        <Route path='/maruzalar' element={<Maruzalar/>} />
        <Route path='/zikrs' element={<Zikrs />}> 
          <Route path='/zikrs/zikr:id' element={<Counter />} />
        </Route>
        <Route path='/settings' element={<Settings />}/>
        <Route path='/live' element={<Live />}/>
      </Routes>
    </div>
  );
}

export default App;
