import redaxios from "redaxios";

export async function getFood() {
  const response = await redaxios.get("/foods");

  return response.data;
}
