import { styled, useStyletron } from "baseui";
import { HeadingSmall, LabelMedium, ParagraphMedium } from "baseui/typography";
import { Button, KIND, SIZE } from "baseui/button";

export const Nav = () => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: "flex",
        width: "100%",
        padding: "12px 16px",
        borderBottom: `1px solid ${theme.colors.borderOpaque}`,
        alignItems: "center",
        justifyContent: "space-between",
      })}
    >
      <LabelMedium>Create 3D Map</LabelMedium>
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          gap: "8px",
        })}
      >
        <Button size={SIZE.compact} kind={KIND.tertiary}>
          Sign out
        </Button>
      </div>
    </div>
  );
};
