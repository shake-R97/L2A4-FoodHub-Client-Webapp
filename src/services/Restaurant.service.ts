import { ApiResponse, ApiSuccessRes, Restaurant } from "@/components/Types/api"
import { env } from "@/env"
import { fetcher } from "@/lib/fetcher"


const BASE = env.API_URL
export const RestaurantService = {
    getSingleRestaurantData (slug: string): Promise<ApiResponse<ApiSuccessRes<Restaurant>>> {
        return fetcher<ApiSuccessRes<Restaurant>>(`${BASE}/provider/${slug}`)
    }
}
