import { Dispatch } from "react";

export interface NavbarLink {
  name: string;
  link: string;
}

export interface MobileNavbarProps {
  NavbarLinks: Array<NavbarLink>;
  isOpen: boolean;
  onSetNavbarExpanded: Dispatch<boolean>;
}