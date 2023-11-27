import React from "react";
import NavLayout from "./components/NavLayout";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import DashBoard from "./pages/dashBoard/DashBoardHome";
import HomePage from "./pages/HomePage";
// import Team from "./pages/team";
// import Invoices from "./pages/invoices";
// import Contacts from "./pages/contacts";
// import Bar from "./pages/bar";
// import Form from "./pages/form";
// import Line from "./pages/line";
// import Pie from "./pages/pie";
// import FAQ from "./pages/faq";
// import Geography from "./pages/geography";
// import Calendar from "./pages/calendar/calendar";





import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavLayout />}>
      <Route index element={<HomePage />} />
      <Route path="profile" element={<Profile />} />
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Logout />} />

      <Route path="dashboard" element={<DashBoard />}>
        {/* <Route path="/team" element={<Team />} /> */}
        {/* <Route path="/contacts" element={<Contacts />} /> */}
        {/* <Route path="/invoices" element={<Invoices />} /> */}
        {/* <Route path="/form" element={<Form />} /> */}
        {/* <Route path="/bar" element={<Bar />} /> */}
        {/* <Route path="/pie" element={<Pie />} /> */}
        {/* <Route path="/line" element={<Line />} /> */}
        {/* <Route path="/faq" element={<FAQ />} /> */}
        {/* <Route path="/calendar" element={<Calendar />} /> */}
        {/* <Route path="/geography" element={<Geography />} /> */}
      </Route>
    </Route>
  )
);

class App extends React.Component {
  render() {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
}

export default App;
