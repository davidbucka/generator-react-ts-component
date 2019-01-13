import * as React from "react";

export interface I<%= componentName =%>Props {}

const <%= componentName =%>: React.FunctionComponent<I<%= componentName =%>Props> = props => {
  return (
    <>
      <%= componentName =%>
    </>
  );
};

export default <%= componentName =%>;
