import { ApiResponse, ApiSuccessRes, CacheOptions, GetMenuParams, Meal } from "@/components/Types/api"
import { env } from "@/env"
import { fetcher } from "@/lib/fetcher"

const BASE = env.API_URL

export const MealService = {

    getMeals(
        
        params?: GetMenuParams , 
        options?: CacheOptions,

    ): Promise<ApiResponse<ApiSuccessRes<Meal[]>>> {

        const url = new URL(`${BASE}/meal/all`);


        if (params) {
            Object.entries(params).forEach(([key, value]) => {

                if (value !== undefined && value !== null && value !== "") {
                    url.searchParams.append(key, value);
                }
            })
        }

        const config: RequestInit = {};

        if(options?.cache){
            config.cache = options.cache
        }

        if(options?.revalidate){
            config.next = {revalidate: options.revalidate}
        }

        return fetcher<ApiSuccessRes<Meal[]>>(url.toString(), config)
    }

}