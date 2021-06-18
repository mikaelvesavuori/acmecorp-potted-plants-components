import spacing from 'tokens/spacing';

export const CartStyle = {
  position: "fixed",
  bottom: `${spacing.big}`,
  right: `${spacing.big}`
};

export const CartCountStyle = {
  // Layout
  position: "absolute",
  width: "2rem",
  height: "2rem",
  top: "-0.25rem",
  left: "-0.25rem",
  // Appearance
  borderRadius: 100,
  color: "white",
  backgroundColor: "black",
  // Text
  fontFamily: "Roboto",
  fontSize: "1.5rem",
  lineHeight: "2rem",
  textAlign: "center"
};