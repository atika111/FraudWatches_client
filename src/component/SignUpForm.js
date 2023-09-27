import React from 'react';

const SignUpForm = () => {
    return (
        <div className="contact-form">
            <h1>Sign Up</h1>
            <section>
                <form action="#" method="POST">
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
                            minLength="6"
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
                            minLength="6"
                        />

                        <button
                            disabled
                            className="subButton"
                            type="submit"
                            value="Sign Up"
                        >
                            <strong>Sign Up</strong>
                        </button>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default SignUpForm;
