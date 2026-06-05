import { ApiError, ApiResponse, ApiSuccessRes } from "@/components/Types/api";

export async function fetcher<T>(
    input: RequestInfo,
    init?: RequestInit
): Promise<ApiResponse<T>> {

    try {
        
        const res = await fetch(input, init)

        // handle a non-2xx http before parsing the body
        if(!res.ok){
            const body = await res.json().catch(()=> {})
            return {
                data: null,
                error: {
                    message: body?.message ?? res.statusText,
                    status: res.status,
                    code: body?.code,
                } satisfies ApiError,
            }
        }


        const data: T = await res.json()
        return {data , error: null}


    } 
    catch (err) {
        // pure network fails
        const message = err instanceof Error ? err.message : "Network Error, please try later";

        return {data: null , error: {message}}
    }
}