"use client";

import { Suspense, useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import logo from '@/public/logo.png';

export default function LoadingOverlay() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    handleStart();
    handleComplete();

    // You can add more logic here if needed to handle route changes
  }, [pathname, searchParams]);

  return (
    <Suspense fallback={<div>Loading...</div>}>

    <>
      {loading && (
        <div className="overlay">
          <Image src={logo} alt="App Logo" className="logo" />
        </div>
      )}
    </>
    </Suspense>
  );
}














// "use client";


// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import logo from '@/public/logo.png';

// export default function LoadingOverlay() {
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const handleStart = () => setLoading(true);
//     const handleComplete = () => setLoading(false);

//     router.events.on('routeChangeStart', handleStart);
//     router.events.on('routeChangeComplete', handleComplete);
//     router.events.on('routeChangeError', handleComplete);

//     return () => {
//       router.events.off('routeChangeStart', handleStart);
//       router.events.off('routeChangeComplete', handleComplete);
//       router.events.off('routeChangeError', handleComplete);
//     };
//   }, [router]);

//   return (
//     <>
//       {loading && (
//         <div className="overlay">
//           <Image src={logo} alt="App Logo" className="logo" />
//         </div>
//       )}
//     </>
//   );
// }