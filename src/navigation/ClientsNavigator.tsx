/**
 * Müşteriler navigation stack
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ClientsStackParamList } from '@/types';

// Screens
import ClientListScreen from '@/screens/clients/ClientListScreen';
import ClientDetailScreen from '@/screens/clients/ClientDetailScreen';
import ClientFormScreen from '@/screens/clients/ClientFormScreen';

const Stack = createNativeStackNavigator<ClientsStackParamList>();

export default function ClientsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4CAF50',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="ClientList"
        component={ClientListScreen}
        options={{ title: 'Müşteriler' }}
      />
      <Stack.Screen
        name="ClientDetail"
        component={ClientDetailScreen}
        options={{ title: 'Müşteri Detayı' }}
      />
      <Stack.Screen
        name="ClientForm"
        component={ClientFormScreen}
        options={({ route }) => ({
          title: route.params?.clientId ? 'Müşteri Düzenle' : 'Yeni Müşteri',
        })}
      />
    </Stack.Navigator>
  );
}
