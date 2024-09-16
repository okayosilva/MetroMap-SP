import axios from "axios";
import { CardItemProps } from "../types/cardItem";
import { baseUrl } from "./api";

export async function getListOfMetroLines(): Promise<CardItemProps[]> {
  try {
    const response = await axios.get(baseUrl)
    console.log(response.data)
    return response.data
  }
  catch (error) {
    console.error(error);
    return [];
  }
}

