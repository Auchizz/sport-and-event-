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
import ComingSoonPage from './pages/public/ComingSoonPage'

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/sports-clubs" element={<SportsClubsPage />} />
        <Route path="/join-team" element={<JoinTeamPage />} />
        <Route
          path="/matches"
          element={
            <ComingSoonPage
              title="Match Schedules & Results"
              description="Phase 2 adds live match filters, upcoming fixtures, and completed result cards."
            />
          }
        />
        <Route
          path="/players"
          element={
            <ComingSoonPage
              title="Player Information"
              description="Phase 2 adds the searchable player directory, sport filters, and captain contact actions."
            />
          }
        />
        <Route
          path="/facilities"
          element={
            <ComingSoonPage
              title="Facilities Booking"
              description="Phase 2 adds facility booking guidance and an availability grid for grounds, courts, and gym access."
            />
          }
        />
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
