import * as React from "react";

import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
    size = 36,
    height,
    ...props
}) => <img src="../../public/logo.png" alt="logo" width={size} />;

