// import { Stack } from "expo-router";
// import './globals.css';

// export default function RootLayout() {
//   return <Stack screenOptions={{
//     headerShown: false
//   }}>
//     <Stack.Screen name="(tabs)" />
//   </Stack>;
// }


import { Stack } from "expo-router";
import { AuthProvider } from "./context/AuthContext";
import './globals.css';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </AuthProvider>
  )
}
