import React, { ReactElement } from "react";
import SkillIcon from "./SkillIcon";

interface SkillRowProps {
  selectedSkillSet: string;
}

enum SkillSetOptions {
  DELVING_IN = "Languages & Tools I'm delving into",
  DAILY_BASIS = "What I use on a daily basis",
  OTHER_SKILLS = "Other Languages & Tools I'm skilled in",
}

function SkillRow({ selectedSkillSet }: SkillRowProps): ReactElement {
  return (
    <div className="mx-auto grid grid-cols-2 gap-4 text-8xl sm:flex sm:flex-wrap sm:content-center sm:justify-evenly">
      {selectedSkillSet === SkillSetOptions.DELVING_IN && (
        <>
          <SkillIcon name="tailwindcss" type="plain" caption="Tailwind CSS" />
          <SkillIcon name="rstudio" type="plain" caption="R" />
          <SkillIcon name="react" type="original" caption="React" />
          <SkillIcon name="azure" type="plain" caption="Azure" />
        </>
      )}
      {selectedSkillSet === SkillSetOptions.DAILY_BASIS && (
        <>
          <SkillIcon name="react" type="original" caption="React" />
          <SkillIcon name="typescript" type="plain" caption="Typescript" />
          <SkillIcon name="sass" type="original" caption="Sass" />
          <SkillIcon name="nodejs" type="plain" caption="Node.js" />
          <SkillIcon name="git" type="plain" caption="Git" />
          <SkillIcon name="vscode" type="plain" caption="VS Code" />
          <SkillIcon name="jira" type="plain" caption="Jira" />
        </>
      )}
      {selectedSkillSet === SkillSetOptions.OTHER_SKILLS && (
        <>
          <SkillIcon name="angularjs" type="plain" caption="Angular" />
          <SkillIcon name="django" type="plain" caption="Django" />
          <SkillIcon name="python" type="plain" caption="Python" />
          <SkillIcon name="pandas" type="original" caption="Pandas" />
          <SkillIcon
            name="jupyter"
            type="plain-wordmark"
            caption="Jupyter Notebook"
          />
          <SkillIcon name="bootstrap" type="plain" caption="Bootstrap" />
          <SkillIcon name="java" type="plain" caption="Java" />
          <SkillIcon name="github" type="original" caption="GitHub" />
        </>
      )}
    </div>
  );
}

export default SkillRow;
