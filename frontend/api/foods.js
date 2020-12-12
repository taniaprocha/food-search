import redaxios from "redaxios";

export async function getFood() {
  const response = await redaxios.get("/foods");

  return response.data;
}

export async function createFood(data) {
  const response = await redaxios.post("/foods", data);

  return response;
}
