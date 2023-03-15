import captureWebsite from "capture-website";

export const buildSnapshot = async () => {
  await captureWebsite.file("https://sindresorhus.com", "screenshot.png");
  return "";
};
