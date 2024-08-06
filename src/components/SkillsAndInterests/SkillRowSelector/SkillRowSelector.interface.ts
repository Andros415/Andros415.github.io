import { Dispatch } from "react";

export interface SkillRowSelectorProps {
  selectedSkillSet: string;
  onSelectSkillSet: Dispatch<string>;
}