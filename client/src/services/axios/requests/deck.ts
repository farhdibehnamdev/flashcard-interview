import { deckDto } from "../../../types/deck.types";
import { URLS } from "../../constants";
import api from "../configs/configs";
export const fetchDecksApi = async function () {
  return await api.get<deckDto>(URLS.deckURL);
};

export const fetchDeckApi = async function (id: number) {
  return await api.get<deckDto>(`${URLS.deckURL}${id}`);
};

export const addDeckApi = async function (deckDto: deckDto) {
  return await api.post<deckDto>(URLS.deckURL, deckDto);
};

export const removeDeckApi = async function (id: number) {
  return await api.delete<number>(`${URLS.deckURL}${id}`);
};

export const updateDeckApi = async function (id: number, deckDto: deckDto) {
  return await api.put<deckDto>(`${URLS.deckURL}${id}`, deckDto);
};

export const partialUpdateDeckApi = async function (
  id: number,
  deckDto: deckDto
) {
  return await api.patch<deckDto>(`${URLS.deckURL}${id}`, deckDto);
};
