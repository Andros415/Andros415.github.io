import { Dispatch, SetStateAction } from "react";

export interface HamburgerButtonProps {
  isNavbarExpanded: boolean;
  setIsNavbarExpanded: Dispatch<SetStateAction<boolean>>;
}