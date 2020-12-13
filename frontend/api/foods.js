import axios from "axios";

export async function getFood() {
  const response = await axios.get("/foods");

  return response.data;
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
