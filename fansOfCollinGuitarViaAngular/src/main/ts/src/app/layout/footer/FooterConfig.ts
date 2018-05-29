/* Defines the footer data */

import {IFooterConfigDetail} from "./FooterConfigDetail";

export interface IFooterConfig   {
  label: string;
  runtime: string[];
  payload: IFooterConfigDetail[];
}

