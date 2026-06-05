import { Restaurant } from "@/components/Types/api";
import { RestaurantService } from "@/services/Restaurant.service";

export default async function RestaurantSingleProfilePage(
    {params}:
    {params: Promise<{slug: string}>}
) {

    const {slug} = await params;

    const {data , error} = await RestaurantService.getSingleRestaurantData(slug)

    if(error){
        console.log(error.message);
        return ;
    }
    

    const restaurant = data.data

  return (
    <div>
        <h1 className="text-9xl">Restaurant Name :{restaurant.businessName}</h1> 
        
    </div>
  )
}
