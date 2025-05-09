import { Route, Routes } from "react-router";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Blogs from "./pages/blogs/Blogs";
import Blog from "./pages/blogs/Blog";
import GuestLayout from "./pages/layouts/GuestLayout";
import AdminLayout from "./pages/layouts/AdminLayout";
import PrivateRoute from "./component/PrivateRoute";
import Unauthorized from "./pages/Unauthorized";
import "bootstrap/dist/css/bootstrap.min.css";
import TanStack from "./pages/TanStack";
import Counter from "./pages/Counter";
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="blogs" element={<Blogs />} />
          <Route path="blog/:slug" element={<Blog />} />
          <Route path="tanstack" element={<TanStack limit={1} />} />
          <Route path="*" element={<Error />} />
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="counter" element={<Counter />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route
            index
            element={
              <PrivateRoute role={""}>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
