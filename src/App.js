import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Cards from "./Components/Cards";
import Modal from "./Components/Modal";
import Footer from "./Components/Lastfooter";
import TopHeader from "./Components/TopHeader";
import Menubar from "./Components/Menubar";
import ForgotPassword from "./Pages/ForgotPassword";
import LoginOption1 from "./Pages/LoginOption1";
import LoginOption2 from "./Pages/LoginOption2";
import RegisterSimple from "./Pages/RegisterSimple";
import RegisterSimple2 from "./Pages/RegisterSimple2";
import RegistrationForgotpw from "./Pages/RegistrationForgotpw";
import UserProfile from "./Components/UserProfile";
import SideNavbar from "./Components/SideNavbar";
import Form1 from "./Components/Form1";
import Form3 from "./Components/Form3";
import FloatingTable from "./Components/FloatingTable";
import OrderSummary from "./Components/OrderSummary";
import PageOption1 from "./Components/PageOption1";
import PageOption2 from "./Components/PageOption2";
import PageOption3 from "./Pages/PageOption3";

const LayoutWithMenu = ({ children }) => (
  <div>
    <TopHeader />
    <Menubar />
    <div className="flex">
      <SideNavbar className="w-1/5" />
      <div id="content" className="bg-gray-300 w-full">
        {children}
        <Footer />
      </div>
    </div>
  </div>
);
const NormalLayout = ({ children }) => <div>{children}</div>;
function App() {
  return (
    <div>
      <Routes>
        {/*----Routes with Menubar,sidebar,and Footer----*/}
        <Route
          path="/"
          element={
            <LayoutWithMenu>
              <Home />
            </LayoutWithMenu>
          }
        />
        <Route
          path="/cards"
          element={
            <LayoutWithMenu>
              <Cards />
            </LayoutWithMenu>
          }
        />
        <Route
          path="/modal"
          element={
            <LayoutWithMenu>
              <Modal />
            </LayoutWithMenu>
          }
        />
        <Route
          path="/userprofile"
          element={
            <LayoutWithMenu>
              <UserProfile />
            </LayoutWithMenu>
          }
        />
        <Route
          path="/form1"
          element={
            <LayoutWithMenu>
              <Form1 />
            </LayoutWithMenu>
          }
        />

        <Route
          path="/form3"
          element={
            <LayoutWithMenu>
              <Form3 />
            </LayoutWithMenu>
          }
        />
        <Route
          path="/floatingtable"
          element={
            <LayoutWithMenu>
              <FloatingTable />
            </LayoutWithMenu>
          }
        />
        <Route
          path="/ordersummary"
          element={
            <LayoutWithMenu>
              <OrderSummary />
            </LayoutWithMenu>
          }
        />
        <Route
          path="/pageoption1"
          element={
            <LayoutWithMenu>
              <PageOption1 />
            </LayoutWithMenu>
          }
        />
        <Route
          path="/pageoption2"
          element={
            <LayoutWithMenu>
              <PageOption2 />
            </LayoutWithMenu>
          }
        />

        {/*----Routes with out Menubar,sidebar,and Footer----*/}
        <Route
          path="/loginoption1"
          element={
            <NormalLayout>
              <LoginOption1 />
            </NormalLayout>
          }
        />
        <Route
          path="/loginoption2"
          element={
            <NormalLayout>
              <LoginOption2 />
            </NormalLayout>
          }
        />
        <Route
          path="/forgotpassword"
          element={
            <NormalLayout>
              <ForgotPassword />
            </NormalLayout>
          }
        />
        <Route
          path="/registersimple"
          element={
            <NormalLayout>
              <RegisterSimple />
            </NormalLayout>
          }
        />
        <Route
          path="/registersimple2"
          element={
            <NormalLayout>
              <RegisterSimple2 />
            </NormalLayout>
          }
        />
        <Route
          path="/registrationforgotpw"
          element={
            <NormalLayout>
              <RegistrationForgotpw />
            </NormalLayout>
          }
        />
        <Route
          path="/pageoption3"
          element={
            <NormalLayout>
              <PageOption3 />
            </NormalLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
