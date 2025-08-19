// import { fetchBookSearch } from "@/services/bookSearch"
// import { Book } from "@/types/book"
// import { useQuery } from "@tanstack/react-query"
// export const useBookSearch = (query: string) => {
//     return useQuery<Book[]>({
//         queryKey: ["books", query],
//         queryFn: () => fetchBookSearch(query),
//         enabled: query.trim().length > 0,
//         staleTime: 1000 * 60 * 5
//     })
// }