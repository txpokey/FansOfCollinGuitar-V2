/* Defines the news data */

import {IGuitarNewsConfigDetail} from "./GuitarNewsConfigDetail";

export interface IGuitarNewsConfig   {
  title: string;
  payload: IGuitarNewsConfigDetail[];
}
