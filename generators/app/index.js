"use strict";
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  prompting() {
    const prompts = [
      {
        type: "input",
        name: "componentName",
        message: "What should your new component be called?"
      },
      {
        type: "list",
        name: "typeOf",
        message: "What do you want to make today?",
        choices: [
          "01-atoms",
          "02-molecules",
          "03-organisms",
          "04-templates",
          "hoc",
          "pages"
        ]
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.componentName;
      this.props = props;
    });
  }

  writing() {
    // This.fs.copy(
    //   this.templatePath("dummyfile.txt"),
    //   this.destinationPath("dummyfile.txt")
    // );
    const { componentName, typeOf } = this.props;

    const entryPoint = typeOf === "pages" ? "pages" : `components/${typeOf}`;

    // Component.tsx
    this.fs.copyTpl(
      this.templatePath("Component.tsx"),
      this.destinationPath(
        `${entryPoint}/${componentName}/${componentName}.tsx`
      ),
      { componentName }
    );

    // Component.demo.tsx
    this.fs.copyTpl(
      this.templatePath("Component.demo.tsx"),
      this.destinationPath(
        `${entryPoint}/${componentName}/${componentName}.demo.tsx`
      ),
      { componentName }
    );

    // Index.tsx
    this.fs.copyTpl(
      this.templatePath("index.ts"),
      this.destinationPath(`${entryPoint}/${componentName}/index.ts`),
      { componentName }
    );
  }
};
