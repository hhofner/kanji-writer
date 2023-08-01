import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";
import Handlebars from "handlebars";
import Kanji from "./components/Kanji"


const app = new Elysia()
  .use(html())
  .get("/", async ({ html }) => {
    const template = Handlebars.compile(await Bun.file("./src/main.html").text());
    return template({ kanji: "感", meaning: "feeling", onyomi: "", kunyomi: "" });
  })
  .get("/next/kanji", () => {
    return (<Kanji character="正" meaning="Fix" onyomi="" kunyomi="" />)
  })
  .get("/previous/kanji", () => {
    return (<Kanji character="奏" meaning="something" onyomi="" kunyomi="" />)
  })
  .get("/styles.css", () => Bun.file("./tailwind-gen/styles.css"))
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);

const BaseHtml = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>THE BETH STACK</title>
  <script src="https://unpkg.com/htmx.org@1.9.3"></script>
  <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
  <link href="/styles.css" rel="stylesheet">
</head>

${children}
`;
