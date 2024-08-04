import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetchUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000/api" : "https://www.johnnguyen.io/api"

type ResponseData = {
  category: string,
  tite: string,
  slug: string,
}[];

export const fetcher = (...args: Parameters<typeof fetch>): Promise<ResponseData> => fetch(...args).then((res) => res.json())


