import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type Smart4lWhereInput = {
  date?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  value?: JsonFilter;
};
