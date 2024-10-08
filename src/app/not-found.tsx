"use client"; // Add this line to mark the component as a Client Component


import React from 'react';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';


const NotFoundPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>

    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
    </Suspense>
  );
};

export default NotFoundPage;