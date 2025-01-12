import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { MyStack } from './src/routes/route';

import CartProvider from './src/context/CartContext';

export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <StatusBar style="auto" />
        {/* 
        Status Bar personalizada
        <StatusBar backgroundColor="#fafafa" barStyle="dark-content"/> 
        */}
        <MyStack/>
      </CartProvider>
    </NavigationContainer>
  );
}