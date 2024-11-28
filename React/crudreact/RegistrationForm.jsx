import React, { useState } from 'react';

const useInputValidation = (validateFunction) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');


    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        setError(validateFunction(newValue));
    };

    return {
        value,
        error,
        onChange: handleChange,
    };
};

const validateUsername = (username) => {
    if (username.length > 4) {
        return 'Username must be 4 characters or less.';
    }
    return '';
};

const validateEmail = (email) => {
    const emailRegex = /^[\w-.]+@[\w-]+\.[a-z]{2,}$/i;
    if (!emailRegex.test(email)) {
        return 'Please enter a valid email address.';
    }
    return '';
};

const validatePassword = (password) => {
    if (password.length < 6) {
        return 'Password must be at least 6 characters long.';
    }
    return '';
};

const validateRetypePassword = (password, retypePassword) => {
    if (password !== retypePassword) {
        return 'Passwords do not match.';
    }
    return '';
};

const validateNotEmpty = (value) => {
    if (!value.trim()) {
        return 'This field is required.';
    }
    return '';
};

const RegistrationForm = () => {
    const username = useInputValidation(validateUsername);
    const email = useInputValidation(validateEmail);
    const password = useInputValidation(validatePassword);
    const [retypePassword, setRetypePassword] = useState('');
    const [retypePasswordError, setRetypePasswordError] = useState('');
    const firstName = useInputValidation(validateNotEmpty);
    const lastName = useInputValidation(validateNotEmpty);
    const phoneNumber = useInputValidation(validateNotEmpty);
    const address = useInputValidation(validateNotEmpty);
    const town = useInputValidation(validateNotEmpty);
    const region = useInputValidation(validateNotEmpty);
    const postcode = useInputValidation(validateNotEmpty);
    const country = useInputValidation(validateNotEmpty);


    const handleSubmit = (e) => {
        e.preventDefault();

        const retypePasswordError = validateRetypePassword(password.value, retypePassword);
        setRetypePasswordError(retypePasswordError);

        if (!username.error && !email.error && !password.error && !retypePasswordError &&
            !firstName.error && !lastName.error && !phoneNumber.error && !address.error &&
            !town.error && !region.error && !postcode.error) {
            console.log('Form Submitted:', {
                username: username.value,
                email: email.value,
                password: password.value,
                firstName: firstName.value,
                lastName: lastName.value,
                phoneNumber: phoneNumber.value,
                address: address.value,
                town: town.value,
                region: region.value,
                postcode: postcode.value,
                country:country.value,
            });
            alert('Form submitted successfully!');
        } else {
            console.log('Form contains errors.');
            alert('Please fix the errors before submitting.');
        }
    };

    return (
        <div style={{ maxWidth: '400px',marginLeft:"-650px", fontFamily: 'Arial, sans-serif' }}>
            <h3 style={{textAlign:"left"}}>Register here</h3>
            <h2 style={{textAlign:"left"}}>User Registration</h2>
            <p style={{textAlign:"left"}}>fields marks <span style={{color:"red"}}>*</span> are required</p>
            <form onSubmit={handleSubmit}>
    
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="username">Username<span style={{color:"red"}}>*</span> </label>
                    <input
                        id="username"
                        type="text"
                        value={username.value}
                        onChange={username.onChange}
                        style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                    {username.error && <small style={{ color: 'red' }}>{username.error}</small>}
                </div>

                
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email">Email<span style={{color:"red"}}>*</span> </label>
                    <input
                        id="email"
                        type="email"
                        value={email.value}
                        onChange={email.onChange}
                        style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                    {email.error && <small style={{ color: 'red' }}>{email.error}</small>}
                </div>

        
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="password">Password<span style={{color:"red"}}>*</span> </label>
                    <input
                        id="password"
                        type="password"
                        value={password.value}
                        onChange={password.onChange}
                        style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                    {password.error && <small style={{ color: 'red' }}>{password.error}</small>}
                </div>

                
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="retypePassword">Retype Password<span style={{color:"red"}}>*</span> </label>
                    <input
                        id="retypePassword"
                        type="password"
                        value={retypePassword}
                        onChange={(e) => setRetypePassword(e.target.value)}
                        style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                    {retypePasswordError && <small style={{ color: 'red' }}>{retypePasswordError}</small>}
                </div>

                
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="firstName">First Name<span style={{color:"red"}}>*</span> </label>
                    <input
                        id="firstName"
                        type="text"
                        value={firstName.value}
                        onChange={firstName.onChange}
                        style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                    {firstName.error && <small style={{ color: 'red' }}>{firstName.error}</small>}
                </div>


                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="lastName">Last Name<span style={{color:"red"}}>*</span> </label>
                    <input
                        id="lastName"
                        type="text"
                        value={lastName.value}
                        onChange={lastName.onChange}
                        style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                    {lastName.error && <small style={{ color: 'red' }}>{lastName.error}</small>}
                </div>

                
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="phoneNumber">Phone Number<span style={{color:"red"}}>*</span> </label>
                    <input
                        id="phoneNumber"
                        type="text"
                        value={phoneNumber.value}
                        onChange={phoneNumber.onChange}
                        style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                    {phoneNumber.error && <small style={{ color: 'red' }}>{phoneNumber.error}</small>}
                </div>

            
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="address">Address<span style={{color:"red"}}>*</span> </label>
                    <input
                        id="address"
                        type="text"
                        value={address.value}
                        onChange={address.onChange}
                        style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                    {address.error && <small style={{ color: 'red' }}>{address.error}</small>}
                </div>

                
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="town">Town:</label>
                    <input
                        id="town"
                        type="text"
                        value={town.value}
                        onChange={town.onChange}
                        style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                    {town.error && <small style={{ color: 'red' }}>{town.error}</small>}
                </div>
                
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="region">region<span style={{color:"red"}}>*</span> </label>
                    <input
                        id="region"
                        type="text"
                        value={region.value}
                        onChange={region.onChange}
                        style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                    {region.error && <small style={{ color: 'red' }}>{region.error}</small>}
                </div>
                
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="postcode">Postcode<span style={{color:"red"}}>*</span> </label>
                    <input
                        id="postcode"
                        type="text"
                        value={postcode.value}
                        onChange={postcode.onChange}
                        style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                    {postcode.error && <small style={{ color: 'red' }}>{postcode.error}</small>}
                </div>
                
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="country">Country<span style={{color:"red"}}>*</span> </label>
                    <select
                        id="country"
                        type="text"
                        value={country.value}
                        onChange={country.onChange}
                        style={{ display: 'block', width: '420px', padding: '8px', marginTop: '5px' }}
                    >
                     <option value="">Select a country</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="India">India</option>
                        <option value="Australia">Australia</option>
                    </select>
                    {country.error && <small style={{ color: 'red' }}>{country.error}</small>}
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div> 
    )
}

export default RegistrationForm;