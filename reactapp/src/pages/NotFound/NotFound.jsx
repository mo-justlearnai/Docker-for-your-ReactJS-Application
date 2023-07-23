// ==================================================
// Title: 404
// Author: Mattithyahu
// Created Date: 24/06/2023
// ==================================================


// Imports
// ==================================================
import React from 'react';

const NotFound = () => {
  return (
    <>
    <div className='mt-24'>
        <span>
            <p className='text-gray-700 text-2xl font-sans font-bold text-center m-20'>
               404
            </p>
            <p className='text-gray-700 text-lg font-sans font-semibold text-center m-20'>
                The requested URL {window.location.pathname} was not found on this server.
            </p>
        </span>
    </div>
    </>
  )
};

export default NotFound;