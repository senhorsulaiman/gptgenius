'use client'
import { QueryClient, useMutation,useQueryClient } from "@tanstack/react-query";
import { getExistingTour, generatetTourResponse, createNewTour } from "../../utils/action";
import toast from "react-hot-toast";
import TourInfo from './TourInfo'
const NewTour = () => {
    const queryClient=useQueryClient();
    const { mutate, isPending, data: tour } = useMutation({

        mutationFn: async (destinations) => {
            const existingTour=await getExistingTour(destinations);
            if(existingTour) return existingTour;
            const newTour = await generatetTourResponse(destinations)

            if (newTour) {
                await createNewTour(newTour);
                // console.log(response);
                queryClient.invalidateQueries({queryKey:['tours']});
                return newTour;
            }
            toast.error('No matching city found...');

            return null;
        }
    })
    const handleClick = (e) => {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const destinations = Object.fromEntries(formData.entries())
       console.log(destinations)
        mutate(destinations);
    }
    if (isPending) {
        return <span className="loading"></span>
    }
    return (
        <div>

            <form onSubmit={handleClick} className='max-w-2xl'>

                <h2 className="mb-4">Select your dream destinations</h2>
                <div className="join w-full">
                    <input type="text" placeholder="city" name='city'
                        className="input input-bordered join-item w-full focus:outline-none " required />

                    <input type="text" placeholder="country" name='country'
                        className="input input-bordered join-item w-full focus:outline-none " required />
                    <button type="submit" className="btn btn-primary  join-item" >genearte tour</button>
                </div>

            </form>
            <div className="">

                {tour ? <TourInfo/> : null}
            </div>
        </div>

    )
}

export default NewTour