import { SortOrder } from "../../util/SortOrder";

export type LocationOrderByInput = {
  createdAt?: SortOrder;
  gps?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
