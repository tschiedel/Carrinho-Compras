import React, { useState, createContext } from "react";

export const CartContext = createContext({});

function CartProvider({ children }) {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

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
            totalResultCart(cartList);
            return;
        } 

        //Ver se o item ainda não foi adicionado e acrescentar 
        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart(products => [...products, data]);
        totalResultCart([...cart, data]);

    }

    function removeItemCart(product){
        const indexItem = cart.findIndex(item => item.id === product.id);

        //Caso tenha mais de um item no carrinho subtrai um
        if(cart[indexItem]?.amount > 1){
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount - 1;
            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;

            setCart(cartList);
            totalResultCart(cartList);
            return;
        }

        /*retorna todos os itens menos o item com o id igual ao ser removido
        para casos onde há apenas 1 item*/
        const removeItem = cart.filter(item => item.id !== product.id);

        setCart(removeItem);
        totalResultCart(removeItem);
    }
    
    function totalResultCart(items){
        let myCart = items;

        let result = myCart.reduce((acc, obj) => { return acc + obj.total}, 0);

        setTotal(result);
    }


    return(
        <CartContext.Provider value={{cart, addItemCart, removeItemCart, total}}>
            {children}
            {/*Componentes a serem renderizados dentro do contexto */}
        </CartContext.Provider>
    );
}

export default CartProvider;