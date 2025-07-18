import React, { useId } from 'react'

function Select({
    options,
    label,
    className = '',
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && (
                <label htmlFor={id} className='inline-block mb-2 pl-1 text-sm font-medium text-slate-700 dark:text-slate-300'>
                    {label}
                </label>
            )}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`px-4 py-3 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent duration-200 border border-slate-300 dark:border-slate-600 w-full shadow-sm hover:border-slate-400 dark:hover:border-slate-500 transition-colors ${className}`}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)