import axios from "axios";

export async function getFood(page) {
  const response = await axios.get(`/foods?page=${page}`);
  return {
    data: response.data[1],
    page: response.data[0].page,
    total: response.data[0].pages,
  };
}

export async function createFood(data) {
  const response = await axios.post("/foods", data);

  return response;
}

export async function deleteFood(id) {
  const response = await axios.delete(`/foods/${id}`);

  return response;
}

export async function updateFood(id, data) {
  const response = await axios.patch(`/foods/${id}`, data);

  return response;
}

export async function searchAndOrder(search, order, page) {
  const response = await axios.get(
    `/foods?search=${search}&order=${order}&page=${page}`
  );

  return {
    data: response.data[1],
    page: response.data[0].page,
    total: response.data[0].pages,
  };
}
