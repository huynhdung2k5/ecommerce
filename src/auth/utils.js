// import jwt from "jsonwebtoken";

export const setSession = (accessToken) => {
    if (accessToken) {
        window.localStorage.setItem("accessToken", accessToken);
    } else {
        window.localStorage.removeItem("accessToken");
    }
};

export const signToken = (phone) => {
    // const payload = { phone: phone };
    localStorage.setItem("accessToken", phone);
    // const secretKey = "secretKey";
    // const token = jwt.sign(payload, secretKey);
    // return token;
};
