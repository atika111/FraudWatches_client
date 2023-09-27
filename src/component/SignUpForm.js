import React, { useState } from 'react';

const SignUpForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [formMessage, setFormMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Update the corresponding state variable based on the input name
        switch (name) {
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'username':
                setUsername(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            firstName &&
            lastName &&
            email &&
            username &&
            password &&
            confirmPassword &&
            password.length >= 6 &&
            password === confirmPassword
        ) {
            console.log('Form data:', {
                firstName,
                lastName,
                email,
                username,
                password,
                confirmPassword,
            });
            setFormMessage(''); // Clear the form message if the form is valid
        } else {
            setFormMessage('Please fill in all the fields before signing up.');
        }
    };

    return (
        <div className="contact-form">
            <h1>Sign Up</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>
                            <strong>Sign Up Form</strong>
                        </legend>

                        <label htmlFor="firstName">
                            <strong>First Name</strong>
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="form-input"
                            placeholder="First Name"
                            value={firstName}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="lastName">
                            <strong>Last Name</strong>
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="form-input"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-input"
                            placeholder="Email"
                            value={email}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="username">
                            <strong>Username</strong>
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="form-input"
                            placeholder="Username"
                            value={username}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-input"
                            placeholder="Password (at least 6 characters)"
                            value={password}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="confirmPassword">
                            <strong>Confirm Password</strong>
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="form-input"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={handleInputChange}
                        />

                        <button className="subButton" type="submit" value="Sign Up">
                            <strong>Sign Up</strong>
                        </button>
                        <div className="form-message">{formMessage}</div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default SignUpForm;
