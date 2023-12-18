
import { Home } from './Home';
import { Home2 } from './Syntax2/Home2';
import { store2 } from './Syntax2/Store2';
import { Provider } from 'react-redux';
function App() {
  return (
    <div>
    {/* <Home/>  */}
     <Provider store={store2}>
    <Home2/>
    </Provider>
    </div>
  );
}

export default App;
