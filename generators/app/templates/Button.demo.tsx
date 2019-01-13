import * as React from "react";

import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

storiesOf("Button", module).add("with click action", () => (
    <Button handleClick={action("test click")}>Hello Button</Button>
));
