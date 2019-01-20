import * as React from "react";

import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

import Peter from "./Peter";

storiesOf("01-atoms/Peter", module).add("with click action", () => (
    <Peter />
));
