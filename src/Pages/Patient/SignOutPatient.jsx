// SignOutPatient.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignOutPatient = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
        localStorage.removeItem("loggedIn");
        navigate('/');  // Navigate to home page after removal
    }, [navigate]);

    return null;  // Return null or a loading indicator if needed
};

export default SignOutPatient;
