import './App.css';
import AppRouter from './router/AppRouter'
import { BrowserRouter as Router } from "react-router-dom";
import UserState from "./context/userContext/UserState";
import SnackbarState from "./context/snackbarContext/SnackbarState";
import ProductState from "./context/productsContext/ProductState";
import ImagesState from './context/imagesContext/imagesState';
import FavoritesState from './context/favoriteContext/FavoriteState';
import Layout from './pages/header/views/Layout';
import CategoryState from './context/categoryContext/CategoryState';

function App() {

  return (
    <div className='app'>
      <SnackbarState>
        <UserState>
          <ProductState>
            <ImagesState>
              <FavoritesState>
                <CategoryState>
                  <Router>
                    <Layout>
                      <AppRouter />
                    </Layout>
                  </Router>
                </CategoryState>
              </FavoritesState>
            </ImagesState>
          </ProductState>
        </UserState>
      </SnackbarState>
    </div>
  );
}

export default App;
