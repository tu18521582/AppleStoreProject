import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ControlledCarousel from './components/Carousel/ControlledCarousel';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Success from "./components/Success/Success";
import Cart from "./features/Cart/components/Cart";
import CartCheckout from "./features/Cart/components/CartCheckout";
import ProductList from './features/Products/components/ProductList';

function App() {
    return (
        <div className="App">
            <Router>
                <div className="my-container">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={ControlledCarousel} />
                        <Route path="/products" component={ProductList} />
                        <Route exact path="/cart" component={Cart} />
                        <Route path="/cart/checkout" component={CartCheckout} />
                        <Route path="/success" component={Success} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </div>
    );
}

export default App;
