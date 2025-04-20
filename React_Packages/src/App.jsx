import { Route, Routes } from "react-router";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Blogs from "./pages/blogs/blogs";
import Blog from "./pages/blogs/blog";
import GuestLayout from "./pages/layouts/GuestLayout";
import AdminLayout from "./pages/layouts/AdminLayout";
import PrivateRoute from "./component/PrivateRoute";
const App = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route element={<GuestLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="blogs" element={<Blogs />} />
            <Route path="blog/:slug" element={<Blog />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Route>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route
            index
            element={
              <PrivateRoute role={["admin", "user"]}>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
