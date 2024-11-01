import './src/injectionContainer';

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/presentation/screens/home';
import { DetailsScreen } from 'presentation/screens/details';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastProvider } from 'presentation/components/toast';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#fff',
              },
              headerShadowVisible: false,
            }}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Pokedex',
                headerTitleStyle: {
                  fontSize: 24,
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen name="Details" component={DetailsScreen} options={{ title: '' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </ToastProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
