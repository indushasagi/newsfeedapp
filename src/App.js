import './styles/App.css';
import Search from './components/Search';
import View from './components/View';
import {AppContext} from './context/AppContext';
import { useEffect, useContext } from 'react';

const App = () => {
  const {fetchLatestNews} = useContext(AppContext);
  useEffect(() => {   
      fetchLatestNews();
  }, [])
    return (
      <>
       <Search />
        <View />        
      </>
    );
}

export default App;
