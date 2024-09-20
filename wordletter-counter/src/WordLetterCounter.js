import React, { useState } from "react"; 


function WordLetterCount() { 
	const [text, setText] = 
		useState(""); 
	const wordCount = text 
		.split(/\s+/) 
		.filter(Boolean).length; 
	const letterCount = text.length; 

	const handleTextChange = (e) => { 
		setText(e.target.value); 
	}; 

	return ( 
		<div> 
			<textArea 
				placeholder= 
				"Type your text here..."
				onChange={ 
					handleTextChange 
				} 
				value={text} 
				rows={5} 
				cols={50} 
			/> 
			<p> 
				Word Count: 
				{wordCount} 
			</p> 
			<p> 
				Letter Count:{" "} 
				{letterCount} 
			</p> 
		</div> 
	); 
} 

export default WordLetterCount;
// import React, { useState } from 'react';

// function WordLetterCount() {
//   const [text, setText] = useState('');
//   const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
//   const letterCount = text.replace(/\s+/g, '').length;

//   return (
//     <div>
//       <textarea 
//         value={text} 
//         onChange={(e) => setText(e.target.value)} 
//         placeholder="Type or paste your text here..."
//         rows="10"
//         cols="30"
//       />
//       <div>
//         <h3>Word Count: {wordCount}</h3>
//         <h3>Letter Count: {letterCount}</h3>
//       </div>
//     </div>
//   );
// }

// export default WordLetterCount;
