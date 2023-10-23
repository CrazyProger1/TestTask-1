import {Routes, Route} from 'react-router-dom';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import UsersPage from './pages/UsersPage';
import GroupsPage from './pages/GroupsPage';
import MainPage from './pages/MainPage';


const App = () =>
    <div className='App'>
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/users' element={<UsersPage/>}/>
            <Route path='/groups' element={<GroupsPage/>}/>
        </Routes>
    </div>


export default App;
