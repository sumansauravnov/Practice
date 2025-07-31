import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import SalesDashboard from "./pages/SalesDashboard";
import CallingDashboard from "./pages/CallingDashboard";
import SidebarLayout from "./components/SidebarLayout";

function App() {
  return (
    <>
      {/* <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes> */}

      <Routes>
        <Route path="/" element={<SidebarLayout />}>
          <Route
            path="admin"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="sales"
            element={
              <ProtectedRoute allowedRoles={["sales"]}>
                <SalesDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="calling"
            element={
              <ProtectedRoute allowedRoles={["calling"]}>
                <CallingDashboard />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
