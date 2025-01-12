import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home/Home';
import Cart from '../pages/Cart/Cart';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
        
        <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{
              headerShown: false,
            }}
        />

        <Stack.Screen 
            name="Cart" 
            component={Cart}
            options={{
              headerTitle: "Meu Carrinho"
            }}
        />

    </Stack.Navigator>
  );
}