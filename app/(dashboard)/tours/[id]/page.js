import { generateTourImage, getSingleTour } from '../../../../utils/action'
import { redirect } from 'next/dist/server/api-utils';
import React from 'react'
// import prisma from '../../../../prisma';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';
import TourInfo from '../../../components/TourInfo';
const url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=`;
const SingleTourPage = async ({ params }) => {

    const tour = await getSingleTour(params.id);
    if (!tour) {

        redirect('/tours');
    }
    const { data } = await axios(`${url}${tour.city}`);
    const tourImage = data?.results[0]?.urls?.raw;
    // const tourImage = await generateTourImage({ city: tour.city, country: tour.country })
    return (
        <>
            <Link href='/tours' className='btn btn-secondary mb-12'>

                back to tours
            </Link>
            {
                tourImage ? <div><Image alt={tour.title} src={tourImage} width={300} height={300} className='rounded-xl shadow-md mb-16 h-96 w-96 object-cover' /></div> : null
            }
            <TourInfo tour={tour} />
        </>

    )
}

export default SingleTourPage