import { API } from "../utils/axios";

export const fetchCharacterData = async () => {
  const response = await API.get("/character");
  return response;
};
