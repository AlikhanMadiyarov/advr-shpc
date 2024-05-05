import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './Header';
import Main from './Main';
import Profile from './profile';
import data from './data';
import Friend from './Friend';
import Friends from './Friends';
import Profiles from './Profiles';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main data={data.PostPage.posts}/>}/>
        <Route path='/profile' element={<Profiles data={data.ProfilePage.users}/>}/>
        <Route path='/friends' element={<Friends data={data.FriendsPage.Friends}/>}/>
      </Routes>
  </div>
    </BrowserRouter>
   
  );
}
export default App;
