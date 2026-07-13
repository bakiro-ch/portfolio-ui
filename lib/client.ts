// // const API_URL = process.env.NEXT_PUBLIC_API_URL;

import { API_URL } from "@/constants/api-url";

// export async function fetcher<T>(endpoint: string, options?: RequestInit): Promise<T> {
//     const url = `${API_URL}${endpoint}`;
  
//     try {
//         const res = await fetch(url, {
//             ...options,
//             headers: {
//                 'Content-Type': 'application/json',
//                 ...options?.headers,
//             },
//         });

//         if (!res.ok) {
//             const errorData = await res.json().catch(() => ({}));
//             throw new Error(errorData.message || `API Error: ${res.statusText}`);
//         }

//         const result = await res.json();

//         return result.data; 
        
//     } catch (error: any) {
//         console.error("Fetch Error:", error);
//         throw error;
//     }
// }

// @/lib/client.ts
export async function fetcher<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_URL}${endpoint}`;

  let token: string | null = null;

  if (typeof window !== 'undefined') {
    console.log(wind);
    const value = `; ${document.cookie}`;
    const parts = value.split(`; token=`);
    if (parts.length === 2) {
      token = parts.pop()?.split(';').shift() || null;
    }
  }

  try {
console.log(token);
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
        ...options?.headers,
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw errorData;
      // throw new Error(errorData.message || `API Error: ${res.statusText}`);
    }

    const result = await res.json();
    
    return result as T; 
    
  } catch (error: any) {
    // console.error("Fetch Error:", error);
    throw error;
  }
}