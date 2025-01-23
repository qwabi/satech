import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import {
  MapPin,
  Upload,
  User,
  Phone,
  Mail,
  Home,
  HelpCircle,
  FileText,
  Image,
} from 'lucide-react';
import { put } from '@vercel/blob';
import axios from 'axios';

export default function BookConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [location, setLocation] = useState(null);
  const [uploadProgress, setUploadProgress] = useState({});
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (router.isReady && router.query && router.query.service) {
      setValue('problem', router.query.service);
      const formElement = document.getElementById('book-consultation');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [router.isReady, router.query, setValue]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Upload images to Vercel Blob Storage
      const imageUrls = [];
      if (data.images && data.images.length > 0) {
        for (const file of data.images) {
          setUploadProgress((prev) => ({ ...prev, [file.name]: 0 }));
          const blob = await put(file.name, file, {
            access: 'public',
            token: process.env.NEXT_PUBLIC_BLOB_READ_WRITE_TOKEN,
            onUploadProgress: (progressEvent) => {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              setUploadProgress((prev) => ({
                ...prev,
                [file.name]: percentCompleted,
              }));
            },
          });
          imageUrls.push(blob.url);
        }
      }

      // Prepare form data for storage
      const formData = {
        ...data,
        images: imageUrls,
        location: location,
        timestamp: new Date().toISOString(),
      };

      // Save form data to Vercel Blob Storage
      const blob = await put(
        `consultation-${Date.now()}.json`,
        JSON.stringify(formData),
        {
          access: 'public',
          token: process.env.NEXT_PUBLIC_BLOB_READ_WRITE_TOKEN,
        }
      );

      // Send notification via Pushbullet
      await axios.post('/api/push', formData);

      alert(
        'Thank you for booking a consultation. Our team will contact you shortly.'
      );
      reset();
      setLocation(null);
      setUploadProgress({});
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleShareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error.message);
          alert(
            'Unable to get your location. Please enter your address manually.'
          );
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    } else {
      alert(
        'Geolocation is not supported by your browser. Please enter your address manually.'
      );
    }
  };

  const UploadProgress = ({ fileName, progress }) => (
    <div className='mt-2'>
      <div className='text-sm text-gray-600'>{fileName}</div>
      <div className='w-full bg-gray-200 rounded-full h-2.5'>
        <div
          className='bg-blue-600 h-2.5 rounded-full'
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id='book-consultation' className='py-16 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12'>
          Book a Consultation
        </h2>
        <div className='bg-white rounded-3xl shadow-xl p-8 max-w-2xl mx-auto'>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <div>
              <label
                htmlFor='name'
                className='block text-gray-700 font-semibold mb-2'
              >
                <User className='inline-block w-5 h-5 mr-2' />
                Name
              </label>
              <input
                type='text'
                id='name'
                {...register('name', { required: 'Name is required' })}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition duration-200'
                placeholder='Enter your full name'
              />
              {errors.name && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.name.message}
                </p>
              )}
              <p className='text-gray-500 text-sm mt-1'>
                Please enter your full name as it appears on official documents.
              </p>
            </div>

            <div>
              <label
                htmlFor='phone'
                className='block text-gray-700 font-semibold mb-2'
              >
                <Phone className='inline-block w-5 h-5 mr-2' />
                Phone Number
              </label>
              <input
                type='tel'
                id='phone'
                {...register('phone', { required: 'Phone number is required' })}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition duration-200'
                placeholder='Enter your phone number'
              />
              {errors.phone && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.phone.message}
                </p>
              )}
              <p className='text-gray-500 text-sm mt-1'>
                We'll use this number to contact you about your consultation.
              </p>
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-gray-700 font-semibold mb-2'
              >
                <Mail className='inline-block w-5 h-5 mr-2' />
                Email Address
              </label>
              <input
                type='email'
                id='email'
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                  },
                })}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition duration-200'
                placeholder='Enter your email address'
              />
              {errors.email && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.email.message}
                </p>
              )}
              <p className='text-gray-500 text-sm mt-1'>
                We'll send a confirmation email to this address.
              </p>
            </div>

            <div>
              <label
                htmlFor='address'
                className='block text-gray-700 font-semibold mb-2'
              >
                <Home className='inline-block w-5 h-5 mr-2' />
                Address
              </label>
              <textarea
                id='address'
                {...register('address', { required: 'Address is required' })}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition duration-200'
                rows='3'
                placeholder='Enter your full address'
              ></textarea>
              {errors.address && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.address.message}
                </p>
              )}
              <p className='text-gray-500 text-sm mt-1'>
                Please provide your complete address for our technician to
                locate you.
              </p>
            </div>

            <div>
              <label
                htmlFor='problem'
                className='block text-gray-700 font-semibold mb-2'
              >
                <HelpCircle className='inline-block w-5 h-5 mr-2' />
                Nature of DStv Problem
              </label>
              <select
                id='problem'
                {...register('problem', {
                  required: 'Please select a problem',
                })}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition duration-200'
              >
                <option value=''>Select a problem</option>
                <optgroup label='Installation Services'>
                  <option value='Dish Installation'>Dish Installation</option>
                  <option value='Dish Relocation'>Dish Relocation</option>
                  <option value='Extra Views'>Extra Views</option>
                  <option value='TV Link'>TV Link</option>
                  <option value='TV Mounting'>TV Mounting</option>
                  <option value='DStv Stand Installation'>
                    DStv Stand Installation
                  </option>
                  <option value='Satellite Systems'>
                    Buy Satellite Dish Systems
                  </option>
                  <option value='Curtain Rail'>
                    Curtain Rail Installations
                  </option>
                </optgroup>
                <optgroup label='Technical Services'>
                  <option value='Signal Issues'>Signal Issues</option>
                  <option value='Signal Booster'>
                    Cellphone Signal Booster
                  </option>
                  <option value='Repairs'>General Repairs</option>
                  <option value='Decoder Testing'>Testing of Decoders</option>
                  <option value='Error E16'>Error E16</option>
                  <option value='Error E17'>Error E17</option>
                  <option value='Error E48'>Error E48</option>
                  <option value='Other Errors'>Other Error Codes</option>
                </optgroup>
                <optgroup label='Administrative Services'>
                  <option value='Balance Check'>Check Balance</option>
                  <option value='Subscription'>
                    Manage DStv Subscriptions
                  </option>
                  <option value='Ownership Transfer'>
                    Change of Ownership
                  </option>
                  <option value='Package Linking'>Package Linking</option>
                  <option value='Package Reconnection'>
                    Package Reconnection
                  </option>
                </optgroup>
              </select>
              {errors.problem && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.problem.message}
                </p>
              )}
              <p className='text-gray-500 text-sm mt-1'>
                Select the issue that best describes your DStv problem.
              </p>
            </div>

            <div>
              <label
                htmlFor='details'
                className='block text-gray-700 font-semibold mb-2'
              >
                <FileText className='inline-block w-5 h-5 mr-2' />
                Additional Details (optional)
              </label>
              <textarea
                id='details'
                {...register('details')}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition duration-200'
                rows='4'
                placeholder='Provide any additional details about your problem'
              ></textarea>
              <p className='text-gray-500 text-sm mt-1'>
                Any extra information will help us better prepare for your
                consultation.
              </p>
            </div>

            <div>
              <label
                htmlFor='images'
                className='block text-gray-700 font-semibold mb-2'
              >
                <Image className='inline-block w-5 h-5 mr-2' />
                Upload Images (optional)
              </label>
              <div className='flex items-center justify-center w-full'>
                <label
                  htmlFor='images'
                  className='flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition duration-200'
                >
                  <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                    <Upload className='w-10 h-10 mb-3 text-gray-400' />
                    <p className='mb-2 text-sm text-gray-500'>
                      <span className='font-semibold'>Click to upload</span> or
                      drag and drop
                    </p>
                    <p className='text-xs text-gray-500'>
                      PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id='images'
                    type='file'
                    className='hidden'
                    multiple
                    accept='image/*'
                    {...register('images')}
                    onChange={(e) => {
                      register('images').onChange(e);
                      setUploadProgress({});
                    }}
                  />
                </label>
              </div>
              {Object.entries(uploadProgress).map(([fileName, progress]) => (
                <UploadProgress
                  key={fileName}
                  fileName={fileName}
                  progress={progress}
                />
              ))}
              <p className='text-gray-500 text-sm mt-1'>
                Upload images of your DStv setup or any visible issues.
              </p>
            </div>

            <div>
              <button
                type='button'
                onClick={handleShareLocation}
                className='flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition duration-200'
              >
                <MapPin className='w-5 h-5 mr-2' />
                Share My Location
              </button>
              {location && (
                <p className='mt-2 text-sm text-gray-600'>
                  Location shared: {location.lat}, {location.lng}
                </p>
              )}
              <p className='text-gray-500 text-sm mt-1'>
                Sharing your location helps us assign the nearest technician.
              </p>
            </div>

            <motion.button
              type='submit'
              disabled={isSubmitting}
              className='w-full bg-secondary text-primary font-bold py-3 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-200'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Booking...' : 'Book Consultation'}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
