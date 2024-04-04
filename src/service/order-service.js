export const ListOrder = async () => {
  const apiUrl = `${process.env.REACT_APP_API_URL}/order/list`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
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
    throw error;
  }
};
