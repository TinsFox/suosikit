import { NextApiResponse, NextApiRequest } from "next";
import captureWebsite from "capture-website";
import { getUnixTime } from "date-fns";
import cheerio from "cheerio";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function buildSnapshotHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;
  console.log("query", url);
  if (!url) {
    res.status(400).send("invalid url");
  }
  const snapshotName = `snapshot/${getUnixTime(new Date())}.jpg`;

  const response = await fetch(url as string);
  const body = await response.text();
  const $ = cheerio.load(body);
  // await captureWebsite.file(url as string, snapshotName, {
  //   overwrite: true,
  //   fullPage: true,
  //   timeout: 3000,
  // });
  const htmlTitle = $("title").text();
  //

  const description = $("meta[name='description']").attr("content");
  const prismares = await prisma.item.create({
    data: {
      title: htmlTitle,
      description,
      source: url as string,
    },
  });
  console.log("prismares", prismares);

  res.status(200).json({
    code: 1,
    data: {
      title: htmlTitle,
      description: description,
    },
  });
}
