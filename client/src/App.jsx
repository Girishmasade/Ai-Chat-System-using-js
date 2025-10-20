import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Commondashboard/Dashboard";
import UserLogin from "./pages/Auth/UserLogin";
import SignUp from "./pages/Auth/SignUp";
import UserDashboard from "./pages/UserPages/UserDashboard";
import ProtectedRoutes from "./components/Protected & Public Route/ProtectedRoutes";
import PublicRoute from "./components/Protected & Public Route/PublicRoute";
import MainLayout from "./components/All components/MainLayout";
import AiChatting from "./pages/AIchatting/AiChatting";
import Chats from "./pages/UserPages/Chats";
import Contacts from "./pages/UserPages/Contacts";
import Settings from "./pages/UserPages/Settings";
import OAuthSuccess from "./pages/Auth/OAuthSuccess/OAuthSuccess";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/dashboard"} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/siginin"
          element={
            <PublicRoute>
              <UserLogin />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />

        <Route path="/oauth-success" element={<OAuthSuccess/>} />

        <Route element={<MainLayout />}>
          <Route
            path="/chat-dashboard"
            element={
              <ProtectedRoutes>
                <UserDashboard />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/novachat"
            element={
              <ProtectedRoutes>
                <AiChatting />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/chats"
            element={
              <ProtectedRoutes>
                <Chats />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/contacts"
            element={
              <ProtectedRoutes>
                <Contacts />
              </ProtectedRoutes>
            }
          />
           <Route
            path="/settings"
            element={
              <ProtectedRoutes>
                <Settings />
              </ProtectedRoutes>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
