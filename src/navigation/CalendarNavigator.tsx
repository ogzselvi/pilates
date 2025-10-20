/**
 * Takvim navigation stack
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CalendarStackParamList } from '@/types';

// Screens
import CalendarViewScreen from '@/screens/calendar/CalendarViewScreen';

const Stack = createNativeStackNavigator<CalendarStackParamList>();

export default function CalendarNavigator() {
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
        name="CalendarView"
        component={CalendarViewScreen}
        options={{ title: 'Takvim' }}
      />
    </Stack.Navigator>
  );
}
