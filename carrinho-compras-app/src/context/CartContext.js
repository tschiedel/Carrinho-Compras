import React, { useState, createContext } from "react";

export const CartContext = createContext({});

function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    function addItemCart(newItem){
        //Ver se o item já está no carrinho e ai adicionar +1 item 
        const indexItem = cart.findIndex(item => item.id === newItem.id);
        /* o findItem devolve o index do item se ele estiver na lista e se não retorna -1 */

        if( indexItem !== -1 ){
            //Encontrou na lista e vai incrementar a contagem deste item na lista
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount + 1;

            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;
        
            setCart(cartList);
            return;
        } 

        //Ver se o item ainda não foi adicionado e acrescentar 
        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart(products => [...products, data]);
        //console.log([...cart, data]);

    }

    return(
        <CartContext.Provider value={{cart, addItemCart}}>
            {children}
            {/*Componentes a serem renderizados dentro do contexto */}
        </CartContext.Provider>
    );
}

export default CartProvider;