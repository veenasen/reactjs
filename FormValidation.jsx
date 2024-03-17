import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    email: '',
    address: '',
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Validate password
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    // Validate confirmPassword
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Validate phone number (assuming a simple format)
    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number';
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    // Validate address
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();

    if (isFormValid) {
      // Submit the form data or perform further actions
      console.log('Form data is valid:', formData);
      alert('Form submittedSuccessfully')
    } else {
      console.log('Form data is not valid. Please correct the errors.');
      alert('Please correct the errors')
    }

  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <span className="error">{errors.name}</span>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <span className="error">{errors.password}</span>
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          <span className="error">{errors.confirmPassword}</span>
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          <span className="error">{errors.phoneNumber}</span>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <span className="error">{errors.email}</span>
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <span className="error">{errors.address}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;