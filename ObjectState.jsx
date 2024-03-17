import React, { useState } from 'react';

function ObjectState() {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const updateField = (fieldName, value) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  return (
    <div>
      <input
        type="text"
        value={userInfo.firstName}
        onChange={(e) => updateField('firstName', e.target.value)}
        placeholder="First Name"
      />
      <input
        type="text"
        value={userInfo.lastName}
        onChange={(e) => updateField('lastName', e.target.value)}
        placeholder="Last Name"
      />
      <input
        type="email"
        value={userInfo.email}
        onChange={(e) => updateField('email', e.target.value)}
        placeholder="Email"
      />
    </div>
  );
}

export default ObjectState;