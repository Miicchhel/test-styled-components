import React, { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState({
    value: '',
    error: '',
    hasError: true,
    wasTouched: false,
  });

  const [password, setPassword] = useState({
    value: '',
    error: '',
    hasError: true,
    wasTouched: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  // const [remember, setRemember] = useState(false);

  // const validateEamil = (email) => {
  //   const emailRegex = /^(.+)@(.+)$/;
  //   return emailRegex.test(email);
  // }

  return (
    <section>
      <form action="">
        <label>
          <input 
            type="text" 
            name={ email } 
            placeholder="email"
            onChange={( {target:{ value }} ) => setEmail({...email, value: value})}
          />
        </label>
        <label>
          <input
            type={ showPassword ? "text":"password" }
            name={ password }
            placeholder="password"
            onChange={( { target:{ value } }) => setPassword({ ...password, value: value }) }
          />
        </label>
        <input
          type="checkbox" 
          name={ showPassword } 
          onChange={ () => setShowPassword(!showPassword) } 
        />
        <button type="submit">Login</button>
      </form>
    </section>
  );
}