/* Defines the footer data */
import {IFooterDetail} from "./FooterDetail";


export interface IFooter   {
  label: string;
  runtime: string;
  payload: IFooterDetail[];
}

