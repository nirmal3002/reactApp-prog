import React  from 'react';
import '../styles/PersonDetail.css'
    const API_URL=process.env.REACT_APP_API_URL

const PersonDetail = () => {
   console.log(API_URL)
    return(
        <div className='person-detail'>
            <h2>to add details about the person</h2>
        </div>
    )

}
export default PersonDetail;
// import React from 'react';
// // import axios from 'axios';
// import '../styles/PersonDetail.css'

// const API_URL = process.env.REACT_APP_API_URL


// const PersonDetail = () => {

//     return(
//         <div className='person-detail'>
//             <h2> This page is use for show the person details </h2>
//         </div>
//     )
// }

// export default PersonDetail;