import { Box, type BoxProps } from "metabase/ui";

import S from "./Widget.module.css";

export const WidgetRoot = (props: BoxProps) => {
  return <Box miw="300px" {...props} />;
};

export const WidgetLabel = (props: BoxProps) => {
  return <Box component="label" className={S.WidgetLabel} {...props} />;
};

export const Footer = (props: BoxProps) => {
  return <Box className={S.Footer} {...props} />;
};

export const TokenFieldWrapper = (props: BoxProps) => {
  return <Box m="sm" {...props} />;
};
