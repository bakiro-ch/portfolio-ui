const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetcher<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${API_URL}${endpoint}`;
  
    try {
        const res = await fetch(url, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
            },
        });

        if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            throw new Error(errorData.message || `API Error: ${res.statusText}`);
        }

        const result = await res.json();
        
        return result.data; 
        
    } catch (error: any) {
        console.error("Fetch Error:", error);
        throw error;
    }
}