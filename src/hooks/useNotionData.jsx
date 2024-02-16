// Custom hook to fetch Notion data.
export function useNotionData() {
  async function fetchNotionData(databaseId) {
    try {
      const endpoint = `${process.env.NEXT_PUBLIC_LAMBDA_URL}/path?databaseId=${databaseId}`;
      const res = await fetch(endpoint);
      const data = await res.json();

      return data;
    } catch (error) {
      console.error(error);
    }
  }

  return fetchNotionData;
}
