import * as React from "react";

import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

import <%= componentName %> from "./<%= componentName %>";

storiesOf("<%= typeOf %>/<%= componentName %>", module).add("with click action", () => (
    <<%= componentName %> />
));
