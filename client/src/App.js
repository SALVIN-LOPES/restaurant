import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import IndexPage from './page/indexpage/IndexPage';
import Login from './page/LoginPage/Login'
import Register from './page/RegisterPage/Register';
import DishForm from './page/dishPage/DishForm';
import SubCategory from './page/sub_categoryPage/SubCategory';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<IndexPage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dish-form" element={<DishForm/>}  />
          <Route path="/sub-caterogy-form" element={<SubCategory/>}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
