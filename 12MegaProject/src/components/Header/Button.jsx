import React from 'react'
 
//here children is like text inside button//

//all these values given below are default parameters for button//

//type is not a class, so we have not included it inside className//

//must give space before spreading props bez jsx requires a space bw attributes//

/* we have used backticks bez we have 3 fixed classes here px,py and rounded and the user can give more also at run time so
   it will be passed all at once as a string, so we have to use backticks , 3 are fixed and more at runtime */

//and other attributes are spreaded as props//   




function Button({children, 
     type='button',
     bgColor='bg-blue-600',
     textColor='text-white',
     className='',
     ...props
}) {
  return (
    <button type={type} className={`px-4 py-2 rounded-lg  ${bgColor} ${textColor} ${className}`} {...props}>
        {children}
    </button>
    
  )
}

export default Button