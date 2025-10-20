/**
 * Raporlar navigation stack
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ReportsStackParamList } from '@/types';

// Screens
import ReportListScreen from '@/screens/reports/ReportListScreen';

const Stack = createNativeStackNavigator<ReportsStackParamList>();

export default function ReportsNavigator() {
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
        name="ReportList"
        component={ReportListScreen}
        options={{ title: 'Raporlar' }}
      />
    </Stack.Navigator>
  );
}
