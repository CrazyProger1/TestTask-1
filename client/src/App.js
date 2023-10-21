import {Routes, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/App.css';
import UsersPage from "./pages/UsersPage";
import GroupsPage from "./pages/GroupsPage";
import MainPage from "./pages/MainPage";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/users" element={<UsersPage/>}/>
                <Route path="/groups" element={<GroupsPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
