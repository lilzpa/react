import React from 'react';
import productsData from '../data/productsData';
import ProductsCard from '../components/ProductsCard';
import { CartProvider } from '../context/cartContext';
import Header from '../components/Header';
import Cart from '../components/Cart';

const Home = () => {
    return (
        <>
        <CartProvider>
        <Header />
            <section id="home">
                <div className="container">
                    <div className="home_content">
                        {
                            productsData.map((item) => (
                                <ProductsCard key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </section>
            
        <Cart />
            </CartProvider>
        </>
    );
};

export default Home;