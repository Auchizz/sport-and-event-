import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/Dashboard'
import ProfilePage from './pages/ProfilePage'
import UserManagementPage from './pages/UserManagementPage'
import SettingsPage from './pages/SettingsPage'
import NotFoundPage from './pages/NotFoundPage'
import ProtectedRoute from './components/ProtectedRoute'
import AdminRoute from './components/AdminRoute'
import PublicLayout from './layouts/PublicLayout'
import HomePage from './pages/public/HomePage'
import SportsClubsPage from './pages/public/SportsClubsPage'
import JoinTeamPage from './pages/public/JoinTeamPage'
import MatchesPage from './pages/public/MatchesPage'
import PlayersPage from './pages/public/PlayersPage'
import FacilitiesPage from './pages/public/FacilitiesPage'

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/sports-clubs" element={<SportsClubsPage />} />
        <Route path="/join-team" element={<JoinTeamPage />} />
        <Route path="/matches" element={<MatchesPage />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/dashboard"
        element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
      />
      <Route
        path="/profile"
        element={<ProtectedRoute><ProfilePage /></ProtectedRoute>}
      />
      <Route
        path="/settings"
        element={<ProtectedRoute><SettingsPage /></ProtectedRoute>}
      />

      <Route
        path="/users"
        element={<AdminRoute><UserManagementPage /></AdminRoute>}
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
