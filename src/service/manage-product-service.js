export const ManageProduct = async () => {
  let apiUrl = `${process.env.REACT_APP_API_URL}/inventory/list`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      console.log(`HTTP error! status: ${response.status}`);
      return new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    console.log(`api return: ${text.success}`);
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
