import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppOpenPage from './pages/AppOpenPage.jsx'
import HomePage from './pages/HomePage.jsx'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/app" element={<AppOpenPage />} />
      <Route path="/app/explore/articles/:id" element={<AppOpenPage />} />
      <Route path="/app/explore/videos/:id" element={<AppOpenPage />} />
      <Route path="/app/*" element={<AppOpenPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
