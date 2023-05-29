// proptype
import PropTypes from "prop-types";
// react
import { createContext, useCallback, useEffect, useMemo, useReducer } from "react";
// utils
// import axios from '../utils/axios';
import localStorageAvailable from "../util/localStrorageAvailable";
import { setSession, signToken } from "./utils";

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

const initialState = {
    isInitialized: false,
    isAuthenticated: false,
};

const reducer = (state, action) => {
    if (action.type === "INITIAL") {
        return {
            isInitialized: true,
            isAuthenticated: action.payload.isAuthenticated,
        };
    }
    if (action.type === "LOGIN") {
        return {
            ...state,
            isAuthenticated: true,
        };
    }
    if (action.type === "LOGOUT") {
        return {
            ...state,
            isAuthenticated: false,
        };
    }

    return state;
};

// ----------------------------------------------------------------------

export const AuthContext = createContext();

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const storageAvailable = localStorageAvailable();

    const initialize = useCallback(() => {
        try {
            const accessToken = storageAvailable ? localStorage.getItem("accessToken") : "";

            if (accessToken) {
                setSession(accessToken);
                dispatch({
                    type: "INITIAL",
                    payload: {
                        isAuthenticated: true,
                    },
                });
            } else {
                dispatch({
                    type: "INITIAL",
                    payload: {
                        isAuthenticated: false,
                    },
                });
            }
        } catch (error) {
            console.error(error);
            dispatch({
                type: "INITIAL",
                payload: {
                    isAuthenticated: false,
                },
            });
        }
    }, [storageAvailable]);

    useEffect(() => {
        initialize();
    }, [initialize]);

    // LOGIN
    const login = useCallback((phone, password) => {
        if (phone === "0967177830" && password === "a12345678") {
            signToken(phone);
            // setSession(accessToken);
            dispatch({
                type: "LOGIN",
            });
        }
    }, []);

    // LOGOUT
    const logout = useCallback(() => {
        // localStorage.removeItem("currentClass");
        setSession(null);
        dispatch({
            type: "LOGOUT",
        });
    }, []);

    const memoizedValue = useMemo(
        () => ({
            isInitialized: state.isInitialized,
            isAuthenticated: state.isAuthenticated,
            method: "jwt",
            login,
            logout,
        }),
        [state.isAuthenticated, state.isInitialized, login, logout]
    );
    return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
