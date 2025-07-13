import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-2 pl-1 text-sm font-medium text-gray-700 dark:text-gray-300' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent duration-200 border border-gray-300 dark:border-gray-600 w-full shadow-sm hover:border-gray-400 dark:hover:border-gray-500 transition-colors ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input