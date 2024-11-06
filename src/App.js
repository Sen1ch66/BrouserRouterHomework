import './App.css';
import { Route, Routes } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import FriendDetail from './components/FriendDetail';
function App() {
  return (
      <div className="App">
        <h1>Довідник друзів</h1>
        <Routes>
          <Route path="/" element={<FriendsList />} />
          <Route path="/friend/:id" element={<FriendDetail />} />
        </Routes>
      </div>
  );
}

export default App;
