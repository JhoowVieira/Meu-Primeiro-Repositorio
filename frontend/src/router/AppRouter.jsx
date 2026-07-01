import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import FirstAccess from "../pages/FirstAccess/FirstAccess";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import Users from "../pages/Users/Users";

function AppRouter() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="/forgot-password"
                    element={<ForgotPassword />}
                />

                <Route
                    path="/first-access"
                    element={<FirstAccess />}
                />

                <Route
                    path="/reset-password"
                    element={<ResetPassword />}
                />

                <Route
                    path="/users"
                    element={<Users />}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default AppRouter;