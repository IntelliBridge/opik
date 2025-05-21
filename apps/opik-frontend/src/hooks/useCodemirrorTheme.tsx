import { useMemo } from "react";
import { tags as t } from "@lezer/highlight";
import { githubDarkInit } from "@uiw/codemirror-theme-github";

type CodemirrorThemeProps = {
  editable?: boolean;
};

export const useCodemirrorTheme = (props?: CodemirrorThemeProps) => {
  const { editable = false } = props || {};
  return useMemo(
    () =>
      githubDarkInit({
        settings: {
          fontFamily: `Ubuntu Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
          fontSize: "0.875rem",
          foreground: "#F8FAFC",
          background: "#181C20",
          gutterBackground: "#181C20",
          gutterForeground: "#94A3B8",
          gutterBorder: "#232A32",
          lineHighlight: editable ? "#232A32" : "transparent",
        },
        styles: [{ tag: [t.className, t.propertyName], color: "#FFD600" }],
      }),
    [editable],
  );
};
