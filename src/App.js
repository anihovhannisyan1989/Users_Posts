import { Route, Routes } from 'react-router';
import Header from './components/Header';
import SinglePost from './pages/SinglePost';
import SingleUser from './pages/SingleUser';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Users from './pages/Users';

function App() {
  return (
    <>
   <Header />
   <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/users' element={<Users />}/>
      <Route path='/users/:id' element={<SingleUser />}/>
      <Route path='/posts' element={<Posts />}/>
      <Route path='/posts/:id' element={<SinglePost />}/>
      <Route path='*' element={<Error404 />}/>
   </Routes>
   </>
  );
}

export default App;
