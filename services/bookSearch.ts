import { Book } from "@/types/book";

export const fetchBookSearch = async (query: string): Promise<Book[]> => {
  try {
    if (!query) return [];

    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`
    );

    const data = await response.json();

    return (
      data.items?.map((item: any) => ({
        id: item.id,
        title: item.volumeInfo.title,
        image: item.volumeInfo.imageLinks?.thumbnail,
        pageCount: item.volumeInfo.pageCount
      })) || []
    );
  } catch (error) {
    console.error("Error searching books", error);
    throw Error;
  }
};
