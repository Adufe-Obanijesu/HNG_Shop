import axios from "axios";

export function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export async function fetchProduct(url, params = []) {

  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + url, {
      params: {
        organization_id: process.env.NEXT_PUBLIC_ORG_ID,
        Appid: process.env.NEXT_PUBLIC_APP_ID,
        Apikey: process.env.NEXT_PUBLIC_API_KEY,
        ...params,
      },
    });
    return response;
  } catch (err) {
    console.error('Error fetching product:', err);
    throw err; // Optionally rethrow the error if you want it to propagate
  }

}