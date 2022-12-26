/* eslint-disable import/no-anonymous-default-export */
import fetch from "./fetch";

const endpointCategory = "/loadcategory/webOrdering";
const endpointItems = "/loaditems/webOrdering";

const company_id = "64e4e47b-b428-4ee3-97f5-62bfa03c8ba6";

export default {
  categoriesPost: async () => {
    try {
      const res = await fetch.post(`${endpointCategory}/${company_id}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  },
  itemsPost: async (id) => {
    try {
      const res = await fetch.post(`${endpointItems}/${company_id}/${id}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  },
};
