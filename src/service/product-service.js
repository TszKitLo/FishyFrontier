export const ListProduct = async (pageNo = 0, size = 9, productName = "") => {
  let apiUrl = `${process.env.REACT_APP_API_URL}/product/list?page=${pageNo}&size=${size}`;
  if (productName !== "") {
    apiUrl += `&name=${encodeURIComponent(productName)}`;
  }

  console.log("apiUrl", apiUrl);

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      console.log(`HTTP error! status: ${response.status}`);
      return new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
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

export const GetProductById = async (productId) => {
  const apiUrl = `${process.env.REACT_APP_API_URL}/product/details/${productId}`;
  console.log("apiUrl", apiUrl);
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      console.log(`HTTP error! status: ${response.status}`);
      return new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    try {
      const data = JSON.parse(text);
      console.log(`GetProduct resp: ${text}`)
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
