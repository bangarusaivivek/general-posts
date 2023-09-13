// modules
import React, { SVGProps } from "react";
import { CustomizedFunctionComponent } from "src/util/helper";

// @ts-ignore
import { ReactComponent as close } from "../../assets/icons/close.icon.svg";
// @ts-ignore
import { ReactComponent as comment } from "../../assets/icons/comment.icon.svg";
// @ts-ignore
import { ReactComponent as dots } from "../../assets/icons/dots.icon.svg";
// @ts-ignore
import { ReactComponent as eye } from "../../assets/icons/eye.icon.svg";
// @ts-ignore
import { ReactComponent as message } from "../../assets/icons/message.icon.svg";

export interface IconProps extends SVGProps<SVGElement> {
  /**
   * Specifies the color of the icon content.
   */
  color?: string;
}

const createIconComponent =
  (Icon: React.ElementType): CustomizedFunctionComponent<IconProps> =>
  // eslint-disable-next-line react/display-name
  ({ color, width, height, ...otherProps }) => {
    return <Icon width={width} height={height} color={color} {...otherProps} />;
  };

export const CloseIcon = createIconComponent(close);
export const CommentIcon = createIconComponent(comment);
export const DotsIcon = createIconComponent(dots);
export const EyeIcon = createIconComponent(eye);
export const MessageIcon = createIconComponent(message);
