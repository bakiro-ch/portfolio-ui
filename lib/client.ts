import { API_URL } from "@/constants/api-url";

export async function fetcher<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_URL}${endpoint}`;
  let token: string | undefined;

  try {
    const { cookies } = await import('next/headers');
    const cookieStore = await cookies();
    token = cookieStore.get('token')?.value;
  } catch {
    if (typeof document !== 'undefined') {
      const match = document.cookie.match(/(?:^|; )token=([^;]*)/);
      token = match ? match[1] : undefined;
    }
  }
  
  try {
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
    }

    const result = await res.json();
    return result as T; 
    
  } catch (error: any) {
    throw error;
  }
}