
export const fetchAPI = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchItemsAPI = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// same as above, need to rename and remove one.
export const fetchItemAPI = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const addItemAPI = async (item, url) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });

  const data = await response.json();
  return data;
};

export const updateItemAPI = async (updatedItem, url) => {
  const response = await fetch(url,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    }
  );
  const data = await response.json();
  return data;
};

export const deleteItemAPI = async (url) => {
  await fetch(url, { method: "delete" });
};

