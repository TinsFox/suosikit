import { env } from "~/env.mjs";
import { type NextApiResponse, type NextApiRequest } from "next";
import axios from "axios";
import { type INotionUser } from "types/notion";
import CryptoJS from "crypto-js";

export default async function NotionHandleCakkback(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code } = req.query;
  console.log("code", code);
  try {
    const wordArray = CryptoJS.enc.Utf8.parse(
      `${env.NEXT_PUBLIC_NOTION_CLIENT_ID}:${env.NOTION_CLIENT_SECRET}`
    );
    const BasicValue = CryptoJS.enc.Base64.stringify(wordArray);
    console.log("base64", BasicValue);
    const user = await axios<INotionUser>({
      url: "https://api.notion.com/v1/oauth/token",
      method: "POST",
      data: {
        code,
        grant_type: "authorization_code",
        redirect_uri: env.NEXT_PUBLIC_NOTION_REDIRECT_URI,
      },
      headers: {
        Authorization: `Basic ${BasicValue}`,
        "Content-Type": "application/json",
      },
    });
    console.log("res", user.data);
  } catch (error) {
    // console.error("error", error);
  }

  return res.redirect("/");
}
