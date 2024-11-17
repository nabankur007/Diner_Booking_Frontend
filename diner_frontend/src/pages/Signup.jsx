import React from "react";
import { useState } from "react";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <>
            <div>this is a sign up page</div>
            <div>this is a sign up page</div>
        </>
    );
};

export default Signup;
