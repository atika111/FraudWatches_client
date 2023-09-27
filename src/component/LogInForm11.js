import React, { useState } from 'react';

const LogInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formMessage, setFormMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email && password) {
            // You can add your login logic here, such as sending the email and password to your server for authentication.
            console.log('Email:', email);
            console.log('Password:', password);
            setFormMessage(''); // Clear the form message if the form is valid
        } else {
            setFormMessage('Please fill in all the fields before logging in.');
        }
    };

    return (
        <div className="contact-form">
            <h1>Log In</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>
                            <strong>Login Form</strong>
                        </legend>

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

                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-input"
                            placeholder="Password"
                            value={password}
                            onChange={handleInputChange}
                        />

                        <button className="subButton" type="submit" value="Log In">
                            <strong>Log In</strong>
                        </button>
                        <div className="form-message">{formMessage}</div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default LogInForm;
