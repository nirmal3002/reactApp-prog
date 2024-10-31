// import React, { useState } from "react"; 
// import validator from 'validator'
// import './App.css'
// const App = () => { 

// 	const [errorMessage, setErrorMessage] = useState('') 

// 	const validate = (value) => { 

// 		if (validator.isStrongPassword(value, { 
// 			minLength: 8, minLowercase: 1, 
// 			minUppercase: 1, minNumbers: 1, minSymbols: 1 
// 		})) { 
// 			setErrorMessage('Is Strong Password') 
// 		} else { 
// 			setErrorMessage('Is Not Strong Password') 
// 		} 
// 	} 

// 	return ( 
// 		<div> 
// 			<pre> 
// 				<h2>Checking Password Strength in ReactJS</h2> 
// 				<span>Enter Password: </span><input type="text"
// 					onChange={(e) => validate(e.target.value)}></input> <br /> 
// 				{errorMessage === '' ? null : 
// 					<span >{errorMessage}</span>} 
// 			</pre> 
// 		</div> 
// 	); 
// } 

// export default App

import React, { useState } from "react"; 
import validator from 'validator';
import './App.css';

const App = () => { 
    const [errorMessage, setErrorMessage] = useState('');

    const validate = (value) => { 
        if (validator.isStrongPassword(value, { 
            minLength: 8, minLowercase: 1, 
            minUppercase: 1, minNumbers: 1, minSymbols: 1 
        })) { 
            setErrorMessage('Strong Password'); 
        } else { 
            setErrorMessage('Not a Strong Password'); 
        } 
    };

    return ( 
        <div className="container"> 
            <h2>Checking Password Strength in ReactJS</h2>
            <span>Enter Password:</span>
            <input
                type="text"
                onChange={(e) => validate(e.target.value)}
            />
            {errorMessage && (
                <span className={errorMessage === 'Strong Password' ? 'success-message' : 'error-message'}>
                    {errorMessage}
                </span>
            )}
        </div>
    ); 
}; 

export default App;
