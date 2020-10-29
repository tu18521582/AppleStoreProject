import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ControlledCarousel from './components/Carousel/ControlledCarousel';
import Header from "./components/Header/Header";
import Success from "./components/Success/Success";
import Cart from "./features/Cart/components/Cart";
import CartCheckout from "./features/Cart/components/CartCheckout";
import ProductList from './features/Products/components/ProductList';

function App() {
    return (
        <div className="App">
            {/* <Header />
            <ControlledCarousel />
            <ProductList /> */}
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={ControlledCarousel} />
                    <Route path="/products" component={ProductList} />
                    <Route exact path="/cart" component={Cart} />
                    <Route path="/cart/checkout" component={CartCheckout} />
                    <Route path="/success" component={Success} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
