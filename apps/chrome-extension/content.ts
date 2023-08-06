import type { PlasmoCSConfig } from "plasmo";

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true,
};
export {};

// // 监听来自弹出窗口的消息
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   console.log("getPageInfo");
//   if (message.action === "getPageInfo") {
//     const pageInfo = {
//       title: document.title,
//       icon: getFavicon(),
//       description: getMetaContent("description"),
//     };
//     sendResponse(pageInfo);
//   }
// });

// // 获取网页的 favicon
// function getFavicon() {
//   const favicon = document.querySelector('link[rel="icon"]');
//   return favicon ? favicon.href : "";
// }

// // 获取指定 meta 标签的内容
// function getMetaContent(name: string) {
//   const meta = document.querySelector(`meta[name="${name}"]`);
//   console.log("meta", meta);
//   return meta ? meta.content : "";
// }
