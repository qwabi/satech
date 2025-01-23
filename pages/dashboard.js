import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../components/Layout';
import { list } from '@vercel/blob';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '200px',
};

const center = {
  lat: -31.8975, // Queenstown, South Africa
  lng: 26.8753,
};

export default function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      router.push('/login');
    } else {
      fetchBookings();
    }
  }, [router]);

  const fetchBookings = async () => {
    try {
      const { blobs } = await list();
      const bookingBlobs = blobs.filter((blob) =>
        blob.pathname.startsWith('consultation-')
      );
      const bookingPromises = bookingBlobs.map((blob) =>
        fetch(blob.url).then((res) => res.json())
      );
      const bookingData = await Promise.all(bookingPromises);
      setBookings(bookingData);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.push('/login');
  };

  if (loading) {
    return (
      <>
        <div className='min-h-screen flex items-center justify-center'>
          Loading...
        </div>
      </>
    );
  }

  return (
    <>
      <div className='min-h-screen bg-gray-100'>
        <header className='bg-white shadow'>
          <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
            <h1 className='text-3xl font-bold text-gray-900'>Dashboard</h1>
            <button
              onClick={handleLogout}
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            >
              Logout
            </button>
          </div>
        </header>
        <main>
          <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
            <div className='px-4 py-6 sm:px-0'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                Booking Requests
              </h2>
              <div className='space-y-8'>
                {bookings.map((booking, index) => (
                  <div
                    key={index}
                    className='bg-white shadow overflow-hidden sm:rounded-lg'
                  >
                    <div className='px-4 py-5 sm:px-6'>
                      <h3 className='text-lg leading-6 font-medium text-gray-900'>
                        Booking from {booking.name}
                      </h3>
                      <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                        Submitted on{' '}
                        {new Date(booking.timestamp).toLocaleString()}
                      </p>
                    </div>
                    <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
                      <dl className='sm:divide-y sm:divide-gray-200'>
                        <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                          <dt className='text-sm font-medium text-gray-500'>
                            Phone
                          </dt>
                          <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                            {booking.phone}
                          </dd>
                        </div>
                        <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                          <dt className='text-sm font-medium text-gray-500'>
                            Email
                          </dt>
                          <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                            {booking.email}
                          </dd>
                        </div>
                        <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                          <dt className='text-sm font-medium text-gray-500'>
                            Problem
                          </dt>
                          <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                            {booking.problem}
                          </dd>
                        </div>
                        <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                          <dt className='text-sm font-medium text-gray-500'>
                            Address
                          </dt>
                          <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                            {booking.address}
                          </dd>
                        </div>
                        <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                          <dt className='text-sm font-medium text-gray-500'>
                            Location
                          </dt>
                          <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                            {booking.location ? (
                              <LoadScript
                                googleMapsApiKey={
                                  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
                                }
                              >
                                <GoogleMap
                                  mapContainerStyle={mapContainerStyle}
                                  center={booking.location}
                                  zoom={14}
                                >
                                  <Marker position={booking.location} />
                                </GoogleMap>
                              </LoadScript>
                            ) : (
                              'Location not provided'
                            )}
                          </dd>
                        </div>
                        <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                          <dt className='text-sm font-medium text-gray-500'>
                            Uploaded Images
                          </dt>
                          <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                            {booking.images && booking.images.length > 0 ? (
                              <div className='grid grid-cols-2 gap-4'>
                                {booking.images.map((image, imgIndex) => (
                                  <div
                                    key={imgIndex}
                                    className='relative h-48 rounded-lg overflow-hidden'
                                  >
                                    <Image
                                      src={image || '/placeholder.svg'}
                                      alt={`Uploaded image ${imgIndex + 1}`}
                                      layout='fill'
                                      objectFit='cover'
                                    />
                                  </div>
                                ))}
                              </div>
                            ) : (
                              'No images uploaded'
                            )}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
