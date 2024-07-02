import React from "react"
import ReactDOM from "react-dom/client"
import "@mantine/core/styles.css"
import "./index.css";
import { MantineProvider } from "@mantine/core"
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react"
import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom"
import RootLayout from "./layouts/RootLayout.tsx"
import HomePage from "./pages/HomePage.tsx"
import CreateServerModal from "./components/modals/CreateServerModal.tsx";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

const RouterComponent = () => {
  const navigate = useNavigate()

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        <Route path="" element={<RootLayout />}>
          <Route 
            index
            element={
              <ProtectedRoute>
                <CreateServerModal/>
                <HomePage/>
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </ClerkProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <RouterComponent />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);

export default RouterComponent