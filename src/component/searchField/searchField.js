import React from 'react';
import './searchField.css';

export const SearchField=({placeholder,handleChange})=>(
        <input
         className='search'
         type='searchField'
         placeholder={placeholder} 
         onChange={handleChange}
        />
)  
