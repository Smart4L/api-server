import { Smart4l as TSmart4l } from "../api/smart4l/Smart4l";

export const SMART4L_TITLE_FIELD = "name";

export const Smart4lTitle = (record: TSmart4l): string => {
  return record.name || record.id;
};
