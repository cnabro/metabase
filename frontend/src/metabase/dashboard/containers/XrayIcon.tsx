import { Icon, useMantineTheme } from "metabase/ui";

import S from "./AutomaticDashboardApp.module.css";

export function XrayIcon() {
  const theme = useMantineTheme();

  return (
    <Icon
      className={S.XrayIcon}
      name="bolt"
      size={24}
      mr="md"
      style={
        {
          "--xray-icon-color": theme.fn.themeColor("accent4"),
        } as React.CSSProperties
      }
    />
  );
}
