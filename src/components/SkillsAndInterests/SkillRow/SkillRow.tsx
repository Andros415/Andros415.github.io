import React, { ReactElement } from "react";
import SkillIcon from "../SkillIcon/SkillIcon";
import { SkillSetOptions } from "./SkillRow.enum";
import { SkillRowProps } from "./SkillRow.interface";


function SkillRow({ selectedSkillSet }: SkillRowProps): ReactElement {
  return (
    <div className="mx-auto grid grid-cols-2 gap-4 text-8xl sm:mx-8 sm:flex sm:flex-wrap sm:content-center sm:justify-evenly">
      {selectedSkillSet === SkillSetOptions.DELVING_IN && (
        <>
          <SkillIcon name="react" type="original" caption="React Native" />
          <SkillIcon name="kubernetes" type="plain" caption="Kubernetes" />
          <SkillIcon name="graphql" type="plain" caption="GraphQL" />
          <SkillIcon name="azure" type="plain" caption="Azure" />
        </>
      )}
      {selectedSkillSet === SkillSetOptions.DAILY_BASIS && (
        <>
          <SkillIcon name="react" type="original" caption="React" />
          <SkillIcon name="typescript" type="plain" caption="Typescript" />
          <SkillIcon name="materialui" type="plain" caption="Material UI" />
          <SkillIcon name="nodejs" type="plain" caption="Node.js" />
          <SkillIcon name="git" type="plain" caption="Git" />
          <SkillIcon name="vscode" type="plain" caption="VS Code" />
          <SkillIcon name="azuredevops" type="plain" caption="Azure DevOps" />
        </>
      )}
      {selectedSkillSet === SkillSetOptions.OTHER_SKILLS && (
        <>
          <SkillIcon name="angularjs" type="plain" caption="Angular" />
          <SkillIcon name="django" type="plain" caption="Django" />
          <SkillIcon name="python" type="plain" caption="Python" />
          <SkillIcon name="figma" type="plain" caption="Figma" />
          <SkillIcon name="tailwindcss" type="plain" caption="Tailwind CSS" />
          <SkillIcon name="bootstrap" type="plain" caption="Bootstrap" />
          <SkillIcon name="java" type="plain" caption="Java" />
          <SkillIcon name="github" type="original" caption="GitHub" />
        </>
      )}
    </div>
  );
}

export default SkillRow;
