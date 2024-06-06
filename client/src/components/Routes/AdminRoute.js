import react, { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function AdminRoute() {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/admin-auth`);
            if (res.data.ok) {
                setOk(true);
            } else {
                setOk(false);
            }
        };
        if (auth?.token) authCheck();
    }, [auth?.token]);
    // useEffect(() => {
    //     const authCheck = async () => {
    //         if (!auth?.token) return; // Exit if no token available

    //         try {
    //             const res = await axios.get(
    //                 `${process.env.REACT_APP_API}/api/v1/auth/admin-auth`,
    //                 {
    //                     headers: {
    //                         Authorization: `Bearer ${auth.token}` // Include token in headers
    //                     }
    //                 }
    //             );
    //             if (res.data.ok) {
    //                 setOk(true);
    //             } else {
    //                 setOk(false);
    //             }
    //         } catch (error) {
    //             console.error("Error:", error); // Log any errors
    //             setOk(false);
    //         }
    //     };

    //     authCheck();
    // }, [auth?.token]);


    return ok ? <Outlet /> : <Spinner path="" />;
}
