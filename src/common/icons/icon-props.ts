import { SVGAttributes } from "react";

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  color?: string;
  fill?: string;
  size?: number;
}
