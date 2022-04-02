import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type SensorWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  value?: FloatFilter;
};
