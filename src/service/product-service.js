export const ListProduct = async (
  pageNo = 0,
  size = 9,
  productName = undefined,
) => {
  console.log(`api link: ${process.env.REACT_APP_API_URL}`);
  let apiUrl = `${process.env.REACT_APP_API_URL}/product/list?page=${pageNo}&size=${size}`;
  if (productName !== undefined) {
    apiUrl += `&name=${encodeURIComponent(productName)}`;
  }

  console.log("apiUrl: ", apiUrl);
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      console.log(`HTTP error! status: ${response.status}`);
      return new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    console.log("Text:", text);
    try {
      const data = JSON.parse(text);
      return data;
    } catch (error) {
      console.error("The response is not valid JSON:", text);
      throw new Error("The response is not valid JSON.");
    }
  } catch (error) {
    console.error("Fetching error: ", error);
    return error;
  }
};
