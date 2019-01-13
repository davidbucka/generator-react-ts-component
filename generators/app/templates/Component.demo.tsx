import * as React from "react";

import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

import <%= componentName %> from "./<%= componentName %>";

storiesOf("<<%= componentName %>>", module).add("with click action", () => (
    <<%= componentName %>> handleClick={action("test click")} />
));
