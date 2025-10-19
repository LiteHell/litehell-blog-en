var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __glob = (map) => (path5) => {
  var fn = map[path5];
  if (fn) return fn();
  throw new Error("Module not found in bundle: " + path5);
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/frontend/i18n/messages/en.json
var require_en = __commonJS({
  "src/frontend/i18n/messages/en.json"(exports, module) {
    module.exports = {
      "head.og.title": "LiteHell's Blog",
      "head.og.description": "LiteHell's personal blog",
      "head.allPost.title": "LiteHell's Blog",
      "head.allPost.paginating.title": "LiteHell's Blog -  Page {page}",
      "head.tags.title": "LiteHell's Blog - All Tags",
      "head.categories.title": "LiteHell's Blog - Categories",
      "head.taggedPosts.title": "LiteHell's Blog - {tag} tagged posts",
      "head.categoriedPosts.title": "LiteHell's Blog - posts in {category} category",
      "head.post.title": "LiteHell's Blog - {title}",
      "head.post.description": "A post of LiteHell's Blog.",
      "head.license.title": "LiteHell's Blog - License",
      "page.allPosts.title": "All Posts",
      "page.allCategories.title": "All Categories",
      "page.categoriedPosts.title": "Posts under {category} category",
      "page.categoriedPosts.back": "Back to all posts",
      "page.taggedPosts.title": "{tag} tagged posts",
      "page.taggedPosts.back": "Back to all posts",
      "license.contact_and_copyright.title": "Copyrights and contact",
      "license.contact_and_copyright.firstSection.html": 'Send a mail to <a href="mailto:litehell@litehell.info">litehell@litehell.info</a> for contact.',
      "license.contact_and_copyright.contentLicense.html": '<h2>Content license</h2>All content of this blog is available under <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" >CC BY-SA 4.0 International license</a>.',
      "license.contact_and_copyright.blogSrc.html": 'Soruce code: <a href="https://github.com/litehell/litehell-blog">GitHub</a>',
      "layout.gravatar.alt": "LiteHell's gravatar icon",
      "layout.title": "LiteHell's blog",
      "layout.externalLinks": "External links",
      "layout.internalLinks": "Internal links",
      "layout.internalLinks.category": "Categories",
      "layout.internalLinks.tags": "Tags",
      "layout.otherLanguages": "Other languages",
      "layout.note": "I don't use AI for writing blog posts. I wrote them by myself. If there's any mistypo or weired sentences, that's because i didn't revise it carefully, so please understand.",
      "post.dateTime": "Wrote by {author} at {date}.",
      "post.dateTime.with_last_modificated_at": "Wrote by {author} at {date} and modified at {last_modified_at}\uC5D0 \uC218\uC815\uD568.",
      "post.categories": "Category: ",
      "post.tags": "Tags: ",
      "post.series": "(Series) {name}",
      "post.onFirstArticle": "This is first post.",
      "post.onLastArticle": "This is last post.",
      "post.translation_info.untranslated_text": "Note: This post is not translated yet.",
      "post.translation_info.translated_text": "Note: This post is translated text.",
      "post.translation_info.translated_at": "Note: This post is translated at {translated_at}.",
      "postList.goToNthPage": "To {page} page",
      "postList.firstPage": "First page",
      "postList.lastPage": "Last page",
      "postList.untranslated": "Not translated yet",
      "tagList.defaultTitle": "All tags",
      "feed.title": "LiteHell's blog",
      "feed.description": "LiteHell's personal blog with articles related to my life, software engineers, and computers",
      "feed.untitled": "Untitled"
    };
  }
});

// src/frontend/i18n/messages/ko.json
var require_ko = __commonJS({
  "src/frontend/i18n/messages/ko.json"(exports, module) {
    module.exports = {
      "head.og.title": "LiteHell\uC758 \uBE14\uB85C\uADF8",
      "head.og.description": "LiteHell\uC758 \uAC1C\uC778\uBE14\uB85C\uADF8",
      "head.allPost.title": "LiteHell\uC758 \uBE14\uB85C\uADF8",
      "head.allPost.paginating.title": "LiteHell\uC758 \uBE14\uB85C\uADF8 - {page}\uBC88\uC9F8 \uD398\uC774\uC9C0",
      "head.tags.title": "LiteHell\uC758 \uBE14\uB85C\uADF8 - \uD0DC\uADF8 \uBAA9\uB85D",
      "head.categories.title": "LiteHell\uC758 \uBE14\uB85C\uADF8 - \uCE74\uD14C\uACE0\uB9AC \uBAA9\uB85D",
      "head.taggedPosts.title": "LiteHell\uC758 \uBE14\uB85C\uADF8 - {tag} \uD0DC\uADF8",
      "head.categoriedPosts.title": "LiteHell\uC758 \uBE14\uB85C\uADF8 - {category} \uCE74\uD14C\uACE0\uB9AC",
      "head.post.title": "LiteHell\uC758 \uBE14\uB85C\uADF8 - {title}",
      "head.post.description": "LiteHell\uC758 \uBE14\uB85C\uADF8 \uAE00\uC785\uB2C8\uB2E4.",
      "head.license.title": "LiteHell\uC758 \uBE14\uB85C\uADF8 - \uB77C\uC774\uC13C\uC2A4",
      "page.allPosts.title": "\uBAA8\uB4E0 \uAE00",
      "page.allCategories.title": "\uCE74\uD14C\uACE0\uB9AC \uBAA9\uB85D",
      "page.categoriedPosts.title": "{category} \uCE74\uD14C\uACE0\uB9AC\uC758 \uAE00",
      "page.categoriedPosts.back": "\uBAA8\uB4E0 \uAE00 \uBAA9\uB85D\uC73C\uB85C",
      "page.taggedPosts.title": "{tag} \uD0DC\uADF8\uAC00 \uB2EC\uB9B0 \uAE00",
      "page.taggedPosts.back": "\uBAA8\uB4E0 \uAE00 \uBAA9\uB85D\uC73C\uB85C",
      "license.contact_and_copyright.title": "\uC800\uC791\uAD8C \uC548\uB0B4 \uBC0F \uC5F0\uB77D\uCC98",
      "license.contact_and_copyright.firstSection.html": '\uBCF8 \uBE14\uB85C\uADF8\uC758 \uC8FC\uC778\uC5D0\uAC8C \uBB38\uC758\uD558\uACE0\uC790 \uD558\uC2DC\uB294 \uBD84\uC740 <a href="mailto:litehell@litehell.info">litehell@litehell.info</a>\uB85C \uC774\uBA54\uC77C\uC744 \uBCF4\uB0B4\uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.',
      "license.contact_and_copyright.contentLicense.html": '<h2>\uCEE8\uD150\uCE20 \uC800\uC791\uAD8C \uC548\uB0B4</h2>\uBCF8 \uBE14\uB85C\uADF8\uC758 \uCEE8\uD150\uCE20\uB294 <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" >\uD06C\uB9AC\uC5D0\uC774\uD2F0\uBE0C \uCEE4\uBA3C\uC988 \uC800\uC791\uC790\uD45C\uC2DC-\uB3D9\uC77C\uC870\uAC74\uBCC0\uACBD\uD5C8\uB77D 4.0 \uAD6D\uC81C \uB77C\uC774\uC120\uC2A4</a>\uC5D0 \uB530\uB77C \uC774\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.',
      "license.contact_and_copyright.blogSrc.html": '\uC18C\uC2A4 \uCF54\uB4DC: <a href="https://github.com/litehell/litehell-blog">GitHub</a>',
      "layout.gravatar.alt": "LiteHell\uC758 Gravatar \uC544\uC774\uCF58",
      "layout.title": "LiteHell\uC758 \uBE14\uB85C\uADF8",
      "layout.externalLinks": "\uC678\uBD80\uACE0\uB9AC",
      "layout.internalLinks": "\uB0B4\uBD80\uACE0\uB9AC",
      "layout.internalLinks.category": "\uCE74\uD14C\uACE0\uB9AC",
      "layout.internalLinks.tags": "\uD0DC\uADF8",
      "layout.otherLanguages": "\uB2E4\uB978 \uC5B8\uC5B4",
      "layout.note": "\uAE00 \uC4F8 \uB54C\uB294 AI\uB97C \uC548 \uC501\uB2C8\uB2E4. \uC804\uBD80 \uC9C1\uC811 \uC501\uB2C8\uB2E4. \uB9CC\uC57D \uC624\uD0C8\uC790\uB098 \uC5B4\uC0C9\uD55C \uBB38\uC7A5\uC774 \uC788\uB2E4\uBA74 \uD1F4\uACE0\uB97C \uB300\uCDA9\uD574\uC11C \uADF8\uB7F0\uAC70\uB2C8 \uC591\uD574 \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4.",
      "post.dateTime": "{date}\uC5D0 {author}\uC774(\uAC00) \uC791\uC131\uD568.",
      "post.dateTime.with_last_modificated_at": "{date}\uC5D0 {author}\uC774(\uAC00) \uC791\uC131\uD558\uACE0 {last_modified_at}\uC5D0 \uC218\uC815\uD568.",
      "post.categories": "\uCE74\uD14C\uACE0\uB9AC: ",
      "post.tags": "\uD0DC\uADF8: ",
      "post.series": "(\uC2DC\uB9AC\uC988) {name}",
      "post.onFirstArticle": "\uCCAB \uAC8C\uC2DC\uAE00\uC785\uB2C8\uB2E4.",
      "post.onLastArticle": "\uB9C8\uC9C0\uB9C9 \uAC8C\uC2DC\uAE00\uC785\uB2C8\uB2E4.",
      "post.translation_info.untranslated_text": "\uCC38\uACE0: \uC544\uC9C1 \uBC88\uC5ED\uB418\uC9C0 \uC54A\uC740 \uAC8C\uC2DC\uAE00\uC785\uB2C8\uB2E4.",
      "post.translation_info.translated_text": "\uCC38\uACE0: \uBC88\uC5ED\uB41C \uAC8C\uC2DC\uAE00\uC785\uB2C8\uB2E4.",
      "post.translation_info.translated_at": "\uCC38\uACE0: {translated_at}\uC5D0 \uBC88\uC5ED\uB41C \uAC8C\uC2DC\uAE00\uC785\uB2C8\uB2E4.",
      "postList.goToNthPage": "{page} \uD398\uC774\uC9C0\uB85C",
      "postList.firstPage": "\uCCAB \uD398\uC774\uC9C0",
      "postList.lastPage": "\uB9C8\uC9C0\uB9C9 \uD398\uC774\uC9C0",
      "postList.untranslated": "\uBBF8\uBC88\uC5ED",
      "tagList.defaultTitle": "\uD0DC\uADF8 \uBAA9\uB85D",
      "feed.title": "LiteHell\uC758 \uBE14\uB85C\uADF8",
      "feed.description": "LiteHell\uC758 \uAC1C\uC778\uBE14\uB85C\uADF8\uC785\uB2C8\uB2E4. \uD504\uB85C\uADF8\uB798\uBC0D\uC774\uB098 \uC81C \uAC1C\uC778\uC801\uC778 \uC77C\uC0C1\uC5D0 \uAD00\uB828\uB41C \uAE00\uB4E4\uC774 \uC62C\uB77C\uC635\uB2C8\uB2E4.",
      "feed.untitled": "\uBB34\uC81C"
    };
  }
});

// src/builder/index.ts
import fsExtra from "fs-extra";
import { mkdir } from "fs/promises";
import path4 from "path";

// src/blog/getPostNames.ts
import { lstat, readdir } from "fs/promises";
import path from "path";
async function scanDirectoryForPosts(dir) {
  const dirEntries = await readdir(dir, { encoding: "utf8" });
  const subDirectories = (await Promise.all(
    dirEntries.map(async (entryName) => ({
      isDirectory: (await lstat(path.join(dir, entryName))).isDirectory(),
      name: entryName
    }))
  )).filter((i) => i.isDirectory).map((i) => i.name);
  const subDirectoriesWithMarkdownFile = (await Promise.all(
    subDirectories.map(async (postName) => {
      const postDir = path.join(dir, postName);
      const files = await readdir(postDir);
      const stats = await Promise.all(
        files.map((j) => path.join(postDir, j)).map(async (i) => ({ stats: await lstat(i), name: i }))
      );
      if (stats.some((i) => i.stats.isFile() && i.name.endsWith(".md")))
        return postName;
      else return null;
    })
  )).filter((i) => i !== null);
  return subDirectoriesWithMarkdownFile;
}
function getPostNames(type) {
  return scanDirectoryForPosts(type === "published" ? "./posts" : "./drafts");
}

// src/blog/parseMarkdown.ts
import rehypeStarryNight from "rehype-starry-night";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
async function parseMarkdown(source) {
  const parsed = await unified().use(remarkParse).use(remarkGfm).use(remarkRehype, { allowDangerousHtml: true, footnoteLabel: "\uC8FC\uC11D" }).use(rehypeStarryNight).use(rehypeStringify, { allowDangerousHtml: true }).process(source);
  return String(parsed);
}

// src/blog/parsePostMetadata.ts
import yaml from "js-yaml";
function parsePostMetadata(source) {
  if (!source.startsWith("---\n")) {
    return {
      metadata: {},
      sourceWithoutMetadata: source
    };
  }
  const metadataYamlEndsAt = source.indexOf("---\n", 4);
  const metadataYaml = source.substring(4, metadataYamlEndsAt);
  return {
    metadata: yaml.load(metadataYaml),
    sourceWithoutMetadata: source.substring(metadataYamlEndsAt + 4)
  };
}

// src/blog/readPostSource.ts
import { lstat as lstat2, readdir as readdir2, readFile } from "fs/promises";
import path2 from "path";
async function readPostSource({
  name,
  draft
}) {
  const dir = `./${draft ? "drafts" : "posts"}/${name}`;
  const entries = await readdir2(dir);
  let sources = (await Promise.all(
    entries.map(async (entryName) => {
      const entryPath = path2.join(dir, entryName);
      const stat = lstat2(entryPath);
      if ((await stat).isFile() && entryName.endsWith(".md")) {
        return {
          lang: entryName.substring(0, entryName.length - 3),
          rawSource: await readFile(entryPath, { encoding: "utf8" })
        };
      } else {
        return null;
      }
    })
  )).filter((i) => i !== null);
  if (sources.length === 0) throw new Error("post not found");
  else return sources;
}

// src/blog/getPosts.ts
async function getPosts({
  includeDrafts = false,
  preferredLang = "ko"
} = {}) {
  const drafts = includeDrafts ? await getPostNames("drafts") : [];
  const published = await getPostNames("published");
  const parse = async (names, draft) => await Promise.all(
    names.map(async (name) => {
      const rawSources = await readPostSource({ name, draft });
      const listOfMetadataAndSource = await Promise.all(
        rawSources.map(async (i) => ({
          ...i,
          ...await parsePostMetadata(i.rawSource)
        }))
      );
      const metadataAndSource = (preferredLang ? listOfMetadataAndSource.find((i) => i.lang === preferredLang) : null) ?? listOfMetadataAndSource.filter((i) => !i.metadata.translated_at).reduce(
        (pv, cv) => {
          if (pv === null) return cv;
          else if (Date.parse(pv.metadata.date) > Date.parse(cv.metadata.date))
            return cv;
          else return pv;
        },
        null
      );
      const translated = preferredLang ? !!metadataAndSource.metadata.translated_at : false;
      return {
        content: {
          ...metadataAndSource,
          translated,
          parsed: await parseMarkdown(
            metadataAndSource.sourceWithoutMetadata
          )
        },
        draft,
        name
      };
    })
  );
  return [...await parse(drafts, true), ...await parse(published, false)];
}

// src/frontend/renderPage.tsx
import minfiyHtml from "@minify-html/node";
import mustache from "mustache";
import React14 from "react";
import { renderToStaticMarkup } from "react-dom/server";

// src/utils/getFirstImageFromHtml.ts
import * as cheerio from "cheerio";
function getFirstImageFromHtml_default(html, baseUrl = "https://blog.litehell.info") {
  const $ = cheerio.load(html);
  const imgs = $("img");
  if (imgs.length === 0) return null;
  const url = new URL(imgs.eq(0).attr("src"), baseUrl);
  return url.href;
}

// src/frontend/pages/index.tsx
import React13 from "react";

// src/frontend/pages/pages/allCategories.tsx
import React3 from "react";

// src/frontend/components/layout/index.tsx
import React from "react";

// src/frontend/components/layout/styled.tsx
import styled from "@emotion/styled";
var Note = styled.p`
  font-size: 75%;
  color: #5e5e5e;
`;
var LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  --top-padding: max(40px, 3rem);
  --vertical-padding: max(20px, 2em);
  padding: var(--top-padding) var(--vertical-padding) 0em
    var(--vertical-padding);
  min-height: 100vh;
  box-sizing: border-box;

  & > * {
    width: 100%;
    @media (min-width: 1024px) {
      max-width: 960px;
    }
  }

  main {
    flex: 1;
  }

  footer {
    padding: 1.5rem 0rem;
    margin: 2rem 0rem 0rem 0rem;
    border-top: 1px solid #727272;
  }
`;
var Header = styled.header`
  display: flex;
  flex-direction: row;

  @media (max-width: 25rem) {
    flex-direction: column;
  }

  align-items: center;
  gap: 2rem;
  padding-bottom: 1.5rem;

  .profileImg {
    a {
      color: inherit;
      text-decoration: none;
    }
    img {
      width: 8rem;
      height: 8rem;
      border-radius: 4rem 4rem;
      box-shadow:
        0 3px 6px rgba(0, 0, 0, 0.16),
        0 3px 6px rgba(0, 0, 0, 0.23);
    }
  }

  .title h1 {
    font-size: 2rem;
    line-height: 2.5rem;
    margin: 0rem 0rem 0.5rem 0rem;
    padding: 0rem;
    word-break: keep-all;

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  .links {
    margin: 0rem;
    padding: 0rem;

    font-size: 0.9rem;
    line-height: 1.2rem;
  }

  @media (max-width: 1023px) {
    .title h1 {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .rounded img {
      width: 7rem;
      height: 7rem;
      border-radius: 3.5rem 3.4rem;
    }
  }
`;
var Footer = styled.footer`
  font-size: 0.75rem;
  line-height: 0.9rem;

  p {
    margin: 0em 0em 1em 0em;
    padding: 0em;
  }

  .badges {
    display: flex;
    flex-direction: row;
    gap: 1em;

    img {
      border-width: 0px;
      height: 3em;
      width: auto;
    }
  }
`;

// src/frontend/i18n/useFormatMessage.ts
import { useIntl } from "react-intl";
function useFormatMessage() {
  const intl = useIntl();
  return (id, params) => {
    return intl.formatMessage({ id }, params);
  };
}

// src/frontend/components/layout/index.tsx
import { FormattedMessage } from "react-intl";

// src/frontend/i18n/useCurrentLang.ts
import { useIntl as useIntl2 } from "react-intl";
function useCurrentLang() {
  const intl = useIntl2();
  return intl.locale;
}

// src/frontend/i18n/getSupportedLangs.ts
function getSupportedLangs() {
  return ["ko", "en"];
}

// src/frontend/components/layout/index.tsx
function Layout({ children }) {
  const formatMessage = useFormatMessage();
  const currentLang = useCurrentLang();
  const supportedLangs = getSupportedLangs();
  return /* @__PURE__ */ React.createElement(LayoutContainer, null, /* @__PURE__ */ React.createElement(Header, null, /* @__PURE__ */ React.createElement("div", { className: "profileImg" }, /* @__PURE__ */ React.createElement("a", { href: "/" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "https://gravatar.com/avatar/837266b567b50fd59e72428220bf69b1",
      alt: formatMessage("layout.gravatar.alt")
    }
  ))), /* @__PURE__ */ React.createElement("div", { className: "title" }, /* @__PURE__ */ React.createElement("h1", null, /* @__PURE__ */ React.createElement("a", { href: "/" }, formatMessage("layout.title"))), /* @__PURE__ */ React.createElement("p", { className: "links" }, formatMessage("layout.externalLinks"), ":", " ", /* @__PURE__ */ React.createElement("a", { href: "https://github.com/litehell" }, "GitHub"), ",", " ", /* @__PURE__ */ React.createElement("a", { href: "https://yeonjin.name/portfolio" }, "Portfolio"), /* @__PURE__ */ React.createElement("br", null), formatMessage("layout.internalLinks"), ":", " ", /* @__PURE__ */ React.createElement("a", { href: "/categories" }, formatMessage("layout.internalLinks.category")), ", ", /* @__PURE__ */ React.createElement("a", { href: "/tags" }, formatMessage("layout.internalLinks.tags")), /* @__PURE__ */ React.createElement("br", null), formatMessage("layout.otherLanguages"), ":", " ", supportedLangs.filter((lang) => lang !== currentLang).map((lang) => {
    const url = lang === "ko" ? "https://blog.litehell.info" : `https://blog-${lang}.litehell.info`;
    return /* @__PURE__ */ React.createElement("a", { href: url }, new Intl.DisplayNames(currentLang, {
      type: "language"
    }).of(lang), " ", "(", new Intl.DisplayNames(lang, { type: "language" }).of(lang), ")");
  })), /* @__PURE__ */ React.createElement(Note, null, /* @__PURE__ */ React.createElement(FormattedMessage, { id: "layout.note" })))), /* @__PURE__ */ React.createElement("main", null, children), /* @__PURE__ */ React.createElement(Footer, null, /* @__PURE__ */ React.createElement("p", null, "Copyright (C) 2020 ~ 2025 Yeonjin Shin (a.k.a. LiteHell), All rights reserved.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("a", { href: "/license" }, "This blog is free software; For source code and more informations on license and copyrights, Click here.")), /* @__PURE__ */ React.createElement("p", null, "Feeds: ", /* @__PURE__ */ React.createElement("a", { href: "/feed/rss" }, "RSS 2.0"), ", ", /* @__PURE__ */ React.createElement("a", { href: "/feed/atom" }, "Atom"), ",", " ", /* @__PURE__ */ React.createElement("a", { href: "/feed/json" }, "JSON")), /* @__PURE__ */ React.createElement("div", { className: "badges" }, /* @__PURE__ */ React.createElement(
    "a",
    {
      rel: "license",
      href: "http://creativecommons.org/licenses/by-sa/4.0/"
    },
    /* @__PURE__ */ React.createElement(
      "img",
      {
        alt: "Creative Commons License",
        src: "https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
      }
    ),
    /* @__PURE__ */ React.createElement("a", { href: "https://www.gnu.org/licenses/agpl-3.0.en.html" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        alt: "GNU Affero General License Version 3",
        src: "https://www.gnu.org/graphics/agplv3-with-text-100x42.png"
      }
    ))
  ))));
}

// src/frontend/components/tagList/tagList.tsx
import React2 from "react";

// src/frontend/components/tagList/styled.tsx
import styled2 from "@emotion/styled";
var Title = styled2.h2`
  font-size: 1.4rem;
  line-height: 2rem;
  margin: 0.25rem 0rem 0rem 0rem;
  padding: 0rem;
`;
var Tag = styled2.li`
  font-size: 2rem;
  .count {
    font-size: 1.2rem;
  }
  a {
    text-decoration: none;
  }
`;
var Tags = styled2.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;

  margin: 2rem 0rem 3rem 0rem;
  padding: 0rem;
  padding-left: 1.5rem;

  li {
    display: block;
  }
`;

// src/frontend/components/tagList/tagList.tsx
function TagList({ tags, title }) {
  const formatMessage = useFormatMessage();
  return /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement(Title, null, title ?? formatMessage("tagList.defaultTitle")), /* @__PURE__ */ React2.createElement(Tags, null, tags.map((tag) => /* @__PURE__ */ React2.createElement(Tag, null, /* @__PURE__ */ React2.createElement("a", { href: tag.href }, tag.name, " ", /* @__PURE__ */ React2.createElement("span", { className: "count" }, "(", tag.count, ")"))))));
}

// src/frontend/pages/pages/allCategories.tsx
import { FormattedMessage as FormattedMessage2 } from "react-intl";
function AllCategories({ categories }) {
  return /* @__PURE__ */ React3.createElement(Layout, null, /* @__PURE__ */ React3.createElement(
    TagList,
    {
      title: /* @__PURE__ */ React3.createElement(FormattedMessage2, { id: "page.allCategories.title" }),
      tags: categories.map((i) => ({
        ...i,
        href: `/category/${encodeURIComponent(i.name)}`
      }))
    }
  ));
}

// src/frontend/pages/pages/allPosts.tsx
import React5 from "react";

// src/frontend/components/postList/postList.tsx
import React4 from "react";

// src/frontend/components/postList/styled.tsx
import styled3 from "@emotion/styled";
var PostListUl = styled3.ul`
  display: flex;
  flex-direction: column;
  margin: 2rem 0rem 3rem 0rem;

  gap: 2rem;
  padding-left: 1.5rem;

  li {
    display: block;

    a {
      color: inherit;
      text-decoration: none;
    }

    .title {
      font-size: 1.6em;
    }
    .subtitle {
      font-size: 0.95em;
    }
    .date {
      font-weight: 200;
      font-size: 0.9em;
      color: #535353;

      .untranslated {
        display: inline-block;
        color: #cc7c7cff;
        margin-left: 0.5rem;
      }
    }
  }
`;
var Title2 = styled3.div`
  h2 {
    font-size: 1.4rem;
    line-height: 2rem;
    margin: 0.25rem 0rem 0rem 0rem;
    padding: 0rem;
  }
  .backLink {
    font-size: 0.9rem;
    line-height: 1rem;
    margin: 0rem 0rem 0.25rem 0rem;
    padding: 0rem;
  }
`;
var Navigation = styled3.nav`
  display: flex;
  flex-direction: row;
  gap: 4em;

  width: 100%;
  max-width: 300px;
`;

// src/frontend/components/postList/postList.tsx
function PostList({
  title,
  backLink,
  navigation,
  posts
}) {
  const formatMessage = useFormatMessage();
  const currentLang = useCurrentLang();
  return /* @__PURE__ */ React4.createElement("div", null, /* @__PURE__ */ React4.createElement(Title2, null, /* @__PURE__ */ React4.createElement("h2", null, title, " "), /* @__PURE__ */ React4.createElement("div", { className: "backLink" }, backLink && /* @__PURE__ */ React4.createElement("a", { href: backLink.href }, "< ", backLink.label))), /* @__PURE__ */ React4.createElement(PostListUl, null, posts.map((post) => /* @__PURE__ */ React4.createElement("li", null, /* @__PURE__ */ React4.createElement("a", { href: post.link }, /* @__PURE__ */ React4.createElement("div", { className: "title" }, post.metadata.title), /* @__PURE__ */ React4.createElement("div", { className: "subtitle" }, post.metadata.subtitle), /* @__PURE__ */ React4.createElement("div", { className: "date" }, new Date(post.metadata.date).toLocaleString(), post.lang !== currentLang ? /* @__PURE__ */ React4.createElement("div", { className: "untranslated" }, formatMessage("postList.untranslated")) : null))))), (!!navigation?.prev || !!navigation?.next) && /* @__PURE__ */ React4.createElement(Navigation, null, navigation?.prev ? /* @__PURE__ */ React4.createElement("a", { href: navigation.prev.href }, formatMessage("postList.goToNthPage", navigation.prev)) : /* @__PURE__ */ React4.createElement("div", null, formatMessage("postList.firstPage")), navigation?.next ? /* @__PURE__ */ React4.createElement("a", { href: navigation.next.href }, formatMessage("postList.goToNthPage", navigation.next)) : /* @__PURE__ */ React4.createElement("div", null, formatMessage("postList.lastPage"))));
}

// src/frontend/pages/pages/allPosts.tsx
import { FormattedMessage as FormattedMessage3 } from "react-intl";
function AllPosts({ posts, navigation }) {
  return /* @__PURE__ */ React5.createElement(Layout, null, /* @__PURE__ */ React5.createElement(
    PostList,
    {
      posts: posts.map((i) => ({
        metadata: i.content.metadata,
        link: `/post/${encodeURI(i.name)}`,
        lang: i.content.lang
      })),
      title: /* @__PURE__ */ React5.createElement(FormattedMessage3, { id: "page.allPosts.title" }),
      navigation: {
        next: navigation.current !== navigation.total ? {
          href: `/page/${navigation.current + 1}`,
          page: navigation.current + 1
        } : void 0,
        prev: navigation.current !== 1 ? {
          href: `/page/${navigation.current - 1}`,
          page: navigation.current - 1
        } : void 0
      }
    }
  ));
}

// src/frontend/pages/pages/allTags.tsx
import React6 from "react";
function AllTags({ tags }) {
  return /* @__PURE__ */ React6.createElement(Layout, null, /* @__PURE__ */ React6.createElement(
    TagList,
    {
      tags: tags.map((i) => ({
        ...i,
        href: `/tag/${encodeURIComponent(i.name)}`
      }))
    }
  ));
}

// src/frontend/pages/pages/categoriedPosts.tsx
import React7 from "react";
function CategoriedPosts({
  posts,
  navigation,
  category
}) {
  const formatMessage = useFormatMessage();
  return /* @__PURE__ */ React7.createElement(Layout, null, /* @__PURE__ */ React7.createElement(
    PostList,
    {
      posts: posts.map((i) => ({
        metadata: i.content.metadata,
        link: `/post/${encodeURI(i.name)}`,
        lang: i.content.lang
      })),
      title: formatMessage("page.categoriedPosts.title", { category }),
      backLink: {
        href: "/",
        label: formatMessage("page.categoriedPosts.back")
      },
      navigation: {
        next: navigation.current !== navigation.total ? {
          href: `/category/${encodeURIComponent(category)}/page/${navigation.current + 1}`,
          page: navigation.current + 1
        } : void 0,
        prev: navigation.current !== 1 ? {
          href: `/category/${encodeURIComponent(category)}/page/${navigation.current - 1}`,
          page: navigation.current - 1
        } : void 0
      }
    }
  ));
}

// src/frontend/pages/pages/license.tsx
import React8 from "react";

// src/frontend/components/post/styled.tsx
import styled4 from "@emotion/styled";
var Header2 = styled4.div`
  padding: 1.5rem 0rem 2rem 0rem;
  margin-bottom: 0.8rem;
  border-bottom: 1px solid #999999;

  .title {
    margin-bottom: 0.25rem;
    * {
      display: inline;
      margin: 0rem;
      padding: 0rem;
    }
    h2 {
      font-size: 2rem;
      line-height: 2.1rem;
    }
    h3 {
      margin-left: 1rem;
      font-size: 1rem;
      line-height: 1rem;
      font-weight: 200;
    }
  }

  .datetime {
    margin: 0rem;
    padding: 0rem;
    color: #666666;
  }

  .links {
    .description {
      color: #666666;
    }
  }
`;
var TranslationInfo = styled4.p`
  padding: 0.5rem 1rem;
  border: #c9b045ff 3px dotted;
  margin: 1rem 0rem;
`;
var Comments = styled4.div`
  .utterances {
    max-width: 100% !important;
  }
`;
var Article = styled4.article`
  padding: 10px 10px;
  font-size: 1rem;
  line-height: 180%;

  pre {
    overflow-x: auto;
    background: #f0f0f0;
    padding: 0.5em 1em;
    border-radius: 6px 6px;
  }
  code {
    font-family: monoscape;
  }
  h1 {
    font-size: 1.8rem;
    margin: 1.8rem 0px;
    &::before {
      content: "# ";
      color: #a19c91;
    }
  }
  h2 {
    font-size: 1.6rem;
    margin: 1.6rem 0px;
    &::before {
      content: "## ";
      color: #a19c91;
    }
  }
  h3 {
    font-size: 1.4rem;
    margin: 1.4rem 0px;
    &::before {
      content: "### ";
      color: #a19c91;
    }
  }
  h4 {
    font-size: 1.2rem;
    margin: 1.2rem 0px;
  }
  h5 {
    font-size: 1.15rem;
    margin: 1.15rem 0px;
    &::before {
      content: "> ";
      color: #a19c91;
    }
  }
  h6 {
    font-size: 1.1rem;
    margin: 1.1rem 0px;
    &::before {
      content: ">> ";
      color: #a19c91;
    }
  }
  img,
  iframe {
    display: block;
    margin: 0 auto;
    max-width: 80%;
  }
  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    border-collapse: collapse;
    td,
    tr,
    th {
      border: 1px gray solid;
    }
    th {
      font-weight: bold;
    }
    th,
    td {
      padding: 5px 10px;
    }
    thead {
      background: rgb(216, 216, 216);
    }
  }
  blockquote {
    background: rgb(194, 194, 194);
    margin: 25px 10px 25px 30px;
    padding: 10px 50px;
    border-left: 5px solid rgb(78, 78, 78);
  }
  ul,
  ol {
    li {
      margin: 6px 0px;
    }
  }
`;
var SeriesNav = styled4.nav`
  border: 1px solid #666666;
  border-radius: 4px 4px;
  background: #dddddd;
  padding: 1em;

  .title {
    font-weight: 600;
  }
  .active {
    font-weight: 600;
  }
  ul {
    margin: 1em 0px 0px 0px;
  }
`;
var PostNav = styled4.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em 0.5em;
  justify-content: space-between;
  width: 100%;

  a {
    text-decoration: none;
  }

  .inner {
    display: inline-block;
    vertical-align: top;

    .title {
      font-size: 1.3em;
      line-height: 1.3rem;
    }
    .subtitle {
      margin-top: 0.2rem;
      font-size: 1rem;
      line-height: 1rem;
      font-weight: 200;
    }
    .date {
      font-size: 0.8em;
      line-height: 0.8rem;
      font-weight: 200;
    }
  }

  .next,
  .previous {
    width: max-content;
    display: flex;
    flex-direction: row;
    gap: 0.5em;

    &.next {
      text-align: right;
      margin-left: auto;
    }

    &.previous {
      text-align: left;
    }

    .inner {
      flex: 1;
    }
  }
`;

// src/frontend/pages/pages/license.tsx
function License() {
  const formatMessage = useFormatMessage();
  return /* @__PURE__ */ React8.createElement(Layout, null, /* @__PURE__ */ React8.createElement(Article, null, /* @__PURE__ */ React8.createElement("h1", null, formatMessage("license.contact_and_copyright.title")), /* @__PURE__ */ React8.createElement(
    "section",
    {
      dangerouslySetInnerHTML: {
        __html: formatMessage(
          "license.contact_and_copyright.firstSection.html"
        )
      }
    }
  ), /* @__PURE__ */ React8.createElement(
    "section",
    {
      className: "content-license",
      dangerouslySetInnerHTML: {
        __html: formatMessage(
          "license.contact_and_copyright.contentLicense.html"
        )
      }
    }
  ), /* @__PURE__ */ React8.createElement("section", { className: "blog-src-code-license" }, /* @__PURE__ */ React8.createElement("p", null), /* @__PURE__ */ React8.createElement("pre", null, "LiteHell's Blog", /* @__PURE__ */ React8.createElement("br", null), "Copyright (C) 2020 ~ 2024 Yeonjin Shin", /* @__PURE__ */ React8.createElement("br", null), /* @__PURE__ */ React8.createElement("br", null), "This program is free software: you can redistribute it and/or modify", /* @__PURE__ */ React8.createElement("br", null), "it under the terms of the GNU Affero General Public License as", /* @__PURE__ */ React8.createElement("br", null), "published by the Free Software Foundation, either version 3 of the", /* @__PURE__ */ React8.createElement("br", null), "License, or (at your option) any later version.", /* @__PURE__ */ React8.createElement("br", null), /* @__PURE__ */ React8.createElement("br", null), "This program is distributed in the hope that it will be useful,", /* @__PURE__ */ React8.createElement("br", null), "but WITHOUT ANY WARRANTY; without even the implied warranty of", /* @__PURE__ */ React8.createElement("br", null), "MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the", /* @__PURE__ */ React8.createElement("br", null), "GNU Affero General Public License for more details.", /* @__PURE__ */ React8.createElement("br", null), /* @__PURE__ */ React8.createElement("br", null), "You should have received a copy of the GNU Affero General Public License", /* @__PURE__ */ React8.createElement("br", null), "along with this program. If not, see <", /* @__PURE__ */ React8.createElement("a", { href: "https://www.gnu.org/licenses/" }, "https://www.gnu.org/licenses/"), ">."))));
}

// src/frontend/pages/pages/post.tsx
import React11 from "react";

// src/frontend/components/post/post.tsx
import React10 from "react";

// src/frontend/components/post/comments.tsx
import React9 from "react";
function Comments2() {
  const props = {};
  return /* @__PURE__ */ React9.createElement(
    Comments,
    {
      dangerouslySetInnerHTML: {
        __html: `
        <script 
        src="https://utteranc.es/client.js"
        repo="LiteHell/litehell-blog"
        issue-term="og:title"
        label="blog comment"
        theme="github-light"
        crossorigin="anonymous"
        async="async"></script>
    `
      }
    }
  );
}

// src/frontend/components/post/post.tsx
function Post({
  current: post,
  previous,
  next,
  series
}) {
  const formatMessage = useFormatMessage();
  const currentLang = useCurrentLang();
  const dateTime = formatMessage(
    post.content.metadata.last_modified_at ? "post.dateTime.with_last_modificated_at" : "post.dateTime",
    {
      ...post.content.metadata,
      date: new Date(post.content.metadata.date).toLocaleString(currentLang)
    }
  );
  const hasLinks = !!post.content.metadata.category || !!post.content.metadata.tags;
  const tagLinks = post.content.metadata.tags?.map((tag) => /* @__PURE__ */ React10.createElement("a", { href: `/tag/${tag}` }, tag)).reduce((pv, cv, idx, arr) => {
    pv.push(cv);
    if (idx !== arr.length - 1) pv.push(/* @__PURE__ */ React10.createElement(React10.Fragment, null, ", "));
    return pv;
  }, []);
  return /* @__PURE__ */ React10.createElement("div", null, /* @__PURE__ */ React10.createElement(Header2, null, /* @__PURE__ */ React10.createElement("div", { className: "title" }, /* @__PURE__ */ React10.createElement("h2", null, post.content.metadata.title), post.content.metadata.subtitle && /* @__PURE__ */ React10.createElement("h3", null, post.content.metadata.subtitle)), /* @__PURE__ */ React10.createElement("p", { className: "datetime" }, dateTime), hasLinks && /* @__PURE__ */ React10.createElement("div", { className: "links" }, post.content.metadata.category && /* @__PURE__ */ React10.createElement("div", { className: "link" }, /* @__PURE__ */ React10.createElement("span", { className: "description" }, formatMessage("post.categories")), /* @__PURE__ */ React10.createElement("a", { href: `/category/${post.content.metadata.category}` }, post.content.metadata.category)), post.content.metadata.tags && /* @__PURE__ */ React10.createElement("div", { className: "link" }, /* @__PURE__ */ React10.createElement("span", { className: "description" }, formatMessage("post.tags")), tagLinks))), series && /* @__PURE__ */ React10.createElement(SeriesNav, null, /* @__PURE__ */ React10.createElement("div", { className: "title" }, formatMessage("post.series", series)), /* @__PURE__ */ React10.createElement("ul", null, series.posts.map((i) => /* @__PURE__ */ React10.createElement("li", null, /* @__PURE__ */ React10.createElement(
    "a",
    {
      href: `/post/${encodeURIComponent(i.name)}`,
      className: i.name === post.name ? "active" : void 0
    },
    i.content.metadata.title
  ))))), post.content.lang !== currentLang && !post.content.translated ? /* @__PURE__ */ React10.createElement(TranslationInfo, null, formatMessage("post.translation_info.untranslated_text")) : !!post.content.translated ? /* @__PURE__ */ React10.createElement(TranslationInfo, null, post.content.metadata.translated_at ? formatMessage("post.translation_info.translated_at", {
    translated_at: new Date(
      post.content.metadata.translated_at
    ).toLocaleString(currentLang)
  }) : formatMessage("post.translation_info.translated_text")) : null, /* @__PURE__ */ React10.createElement(Article, { dangerouslySetInnerHTML: { __html: post.content.parsed } }), /* @__PURE__ */ React10.createElement(Comments2, null), /* @__PURE__ */ React10.createElement(PostNav, null, previous ? /* @__PURE__ */ React10.createElement(
    "a",
    {
      href: `/post/${encodeURIComponent(previous.name)}`,
      className: "previous"
    },
    /* @__PURE__ */ React10.createElement("div", { className: "arrow" }, "\u276E"),
    /* @__PURE__ */ React10.createElement("div", { className: "inner" }, /* @__PURE__ */ React10.createElement("div", { className: "title" }, previous.content.metadata.title), /* @__PURE__ */ React10.createElement("div", { className: "subtitle" }, previous.content.metadata.subtitle), /* @__PURE__ */ React10.createElement("div", { className: "date" }, new Date(previous.content.metadata.date).toLocaleString(
      currentLang
    )))
  ) : /* @__PURE__ */ React10.createElement("div", { className: "noop" }, formatMessage("post.onFirstArticle")), next ? /* @__PURE__ */ React10.createElement("a", { href: `/post/${encodeURIComponent(next.name)}`, className: "next" }, /* @__PURE__ */ React10.createElement("div", { className: "inner" }, /* @__PURE__ */ React10.createElement("div", { className: "title" }, next.content.metadata.title), /* @__PURE__ */ React10.createElement("div", { className: "subtitle" }, next.content.metadata.subtitle), /* @__PURE__ */ React10.createElement("div", { className: "date" }, new Date(next.content.metadata.date).toLocaleString(
    currentLang
  ))), /* @__PURE__ */ React10.createElement("div", { className: "arrow" }, "\u276F")) : /* @__PURE__ */ React10.createElement("div", { className: "noop" }, formatMessage("post.onLastArticle"))));
}

// src/frontend/pages/pages/post.tsx
function Post2(props) {
  return /* @__PURE__ */ React11.createElement(Layout, null, /* @__PURE__ */ React11.createElement(Post, { ...props.post }));
}

// src/frontend/pages/pages/taggedPosts.tsx
import React12 from "react";
function TaggedPosts({
  posts,
  navigation,
  tag
}) {
  const formatMessage = useFormatMessage();
  return /* @__PURE__ */ React12.createElement(Layout, null, /* @__PURE__ */ React12.createElement(
    PostList,
    {
      posts: posts.map((i) => ({
        metadata: i.content.metadata,
        link: `/post/${encodeURI(i.name)}`,
        lang: i.content.lang
      })),
      title: formatMessage("page.taggedPosts.title"),
      backLink: {
        href: "/",
        label: formatMessage("page.taggedPosts.back")
      },
      navigation: {
        next: navigation.current !== navigation.total ? {
          href: `/tag/${encodeURIComponent(tag)}/page/${navigation.current + 1}`,
          page: navigation.current + 1
        } : void 0,
        prev: navigation.current !== 1 ? {
          href: `/tag/${encodeURIComponent(tag)}/page/${navigation.current - 1}`,
          page: navigation.current - 1
        } : void 0
      }
    }
  ));
}

// src/frontend/pages/index.tsx
import { IntlProvider } from "react-intl";
function BlogPageInnerContent(props) {
  switch (props.pageName) {
    case "all_posts":
      return /* @__PURE__ */ React13.createElement(AllPosts, { ...props });
    case "tags":
      return /* @__PURE__ */ React13.createElement(AllTags, { ...props });
    case "categories":
      return /* @__PURE__ */ React13.createElement(AllCategories, { ...props });
    case "categoried_posts":
      return /* @__PURE__ */ React13.createElement(CategoriedPosts, { ...props });
    case "tagged_posts":
      return /* @__PURE__ */ React13.createElement(TaggedPosts, { ...props });
    case "post":
      return /* @__PURE__ */ React13.createElement(Post2, { ...props });
    case "license":
      return /* @__PURE__ */ React13.createElement(License, null);
    default:
      throw new Error("undefined pageName");
  }
}
function BlogPage(props) {
  return /* @__PURE__ */ React13.createElement(IntlProvider, { messages: props.langData, locale: props.lang }, /* @__PURE__ */ React13.createElement(BlogPageInnerContent, { ...props }));
}

// src/frontend/template.ejs
var template_default = `<!DOCTYPE html>
<html>
  <head>
    <link
      rel="icon"
      href="https://gravatar.com/avatar/837266b567b50fd59e72428220bf69b1"
    />
    <link rel="canonical" href="{{ canonicalUrl }}" />
    <link
      rel="alternate"
      type="application/rss+xml"
      title="RSS 2.0 Feed for LiteHell's blog"
      href="https://blog{{ urlLangSuffix ?? '' }}.litehell.info/feed/rss"
    />
    <link
      rel="alternate"
      type="	application/atom+xml"
      title="Atom 1.0 Feed for LiteHell's blog"
      href="https://blog{{ urlLangSuffix ?? '' }}.litehell.info/feed/atom"
    />
    <link
      rel="alternate"
      type="application/feed+json"
      title="Json 1.0 Feed for LiteHell's blog"
      href="https://blog{{ urlLangSuffix ?? '' }}.litehell.info/feed/json"
    />
    
    <link rel="stylesheet" href="https://esm.sh/@wooorm/starry-night@3/style/both.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet">

    <meta property="og:title" content="{{ og_title }}" />
    <meta property="og:description" content="{{ og_description }}" />
    <meta property="og:locale" content="ko_KR" />
    <meta property="og:type" content="{{ og_type }}" />
    <meta property="og:site_name" content="LiteHell\uC758 \uBE14\uB85C\uADF8" />
    <meta property="og:url" content="{{ canonicalUrl }}" />
    <meta property="og:image" content="{{ canonicalImage }}" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: "Noto Sans KR", sans-serif;
      }
    </style>

    <title>{{ title }}</title>
  </head>
  <body>
    {{{ body }}}
  </body>
</html>
`;

// src/frontend/i18n/createNodeFormatMessage.ts
import { createIntl, createIntlCache } from "@formatjs/intl";

// import("./messages/**/*.json") in src/frontend/i18n/getLangData.ts
var globImport_messages_json = __glob({
  "./messages/en.json": () => Promise.resolve().then(() => __toESM(require_en())),
  "./messages/ko.json": () => Promise.resolve().then(() => __toESM(require_ko()))
});

// src/frontend/i18n/getLangData.ts
async function getLangData(lang) {
  return await globImport_messages_json(`./messages/${lang}.json`);
}

// src/frontend/i18n/getDefaultLang.ts
function getDefaultLang() {
  return "ko";
}

// src/frontend/i18n/createNodeFormatMessage.ts
async function createNodeFormatMessage(lang) {
  const messages = await getLangData(lang);
  const defaultLocale = getDefaultLang();
  const cache = createIntlCache();
  const intl = createIntl(
    {
      locale: lang,
      defaultLocale,
      messages
    },
    cache
  );
  return (id, params) => {
    return intl.formatMessage(
      {
        id
      },
      params
    );
  };
}

// src/frontend/renderPage.tsx
var gravatar = "https://gravatar.com/avatar/837266b567b50fd59e72428220bf69b1";
function createDefaultTemplateData(formatMessage, lang = "ko") {
  return {
    canonicalImage: gravatar,
    canonicalUrl: `https://blog${lang == "ko" ? "" : `-${lang}`}.litehell.info`,
    og_type: "blog",
    og_title: formatMessage("head.og.title"),
    title: formatMessage("head.og.title"),
    og_description: formatMessage("head.og.description")
  };
}
function getHtmlHeadData(data, formatMessage, lang = "ko") {
  const blogUrl = `https://blog${lang == "ko" ? "" : `-${lang}`}.litehell.info`;
  switch (data.pageName) {
    case "all_posts":
      return data.navigation.current === 1 ? {
        title: formatMessage("head.allPost.title"),
        canonicalUrl: blogUrl
      } : {
        title: formatMessage("head.allPost.paginating.title", {
          page: data.navigation.current
        }),
        canonicalUrl: `${blogUrl}/page/${data.navigation.current}`
      };
    case "tags":
      return {
        og_title: formatMessage("head.tags.title"),
        title: formatMessage("head.tags.title"),
        canonicalUrl: blogUrl + "/tags"
      };
    case "categories":
      return {
        og_title: formatMessage("head.categories.title"),
        title: formatMessage("head.categories.title"),
        canonicalUrl: blogUrl + "/tags"
      };
    case "tagged_posts":
      return {
        title: formatMessage("head.taggedPosts.title", { tag: data.tag }),
        og_title: formatMessage("head.taggedPosts.title", { tag: data.tag }),
        canonicalUrl: data.navigation.current === 1 ? `${blogUrl}/tag/${data.tag}` : `${blogUrl}/tag/${data.tag}/page/${data.navigation.current}`
      };
    case "categoried_posts":
      return {
        title: formatMessage("head.categoriedPosts.title", {
          category: data.category
        }),
        og_title: formatMessage("head.categoriedPosts.title", {
          category: data.category
        }),
        canonicalUrl: data.navigation.current === 1 ? `${blogUrl}/category/${data.category}` : `${blogUrl}/category/${data.category}/page/${data.navigation.current}`
      };
    case "post":
      return {
        title: formatMessage("head.post.title", {
          title: data.post.current.content.metadata.title
        }),
        og_title: data.post.current.content.metadata.title,
        og_description: data.post.current.content.metadata.subtitle ?? formatMessage("head.post.description"),
        canonicalImage: getFirstImageFromHtml_default(data.post.current.content.parsed) ?? gravatar,
        canonicalUrl: `${blogUrl}/post/${encodeURIComponent(data.post.current.name)}`
      };
    case "license":
      return {
        title: formatMessage("head.license.title"),
        og_title: formatMessage("head.license.title"),
        canonicalUrl: blogUrl + "/license"
      };
  }
}
async function renderBlogPage(data) {
  const BLOG_LANG = process.env.BLOG_LANG ?? getDefaultLang();
  const formatMessage = await createNodeFormatMessage(BLOG_LANG);
  const langData = await getLangData(BLOG_LANG);
  const defaultHeadTemplateData = createDefaultTemplateData(
    formatMessage,
    BLOG_LANG
  );
  const body = renderToStaticMarkup(
    /* @__PURE__ */ React14.createElement(BlogPage, { ...data, lang: BLOG_LANG, langData })
  );
  return minfiyHtml.minify(
    Buffer.from(
      mustache.render(template_default, {
        ...defaultHeadTemplateData,
        ...getHtmlHeadData(data, formatMessage, BLOG_LANG),
        ...data,
        body,
        urlLangSuffix: BLOG_LANG == "ko" ? "" : `-${BLOG_LANG}`
      })
    ),
    {
      minify_css: true,
      minify_js: true
    }
  ).toString("utf-8");
}

// src/render/routes/allCategories.ts
async function tryRenderAllCategories(route, posts) {
  if (route === "/categories") {
    const tags = posts.map((i) => i.content.metadata.category ?? null).filter((i) => i !== null).reduce(
      (pv, cv) => {
        if (!(cv in pv)) pv[cv] = 1;
        else pv[cv] += 1;
        return pv;
      },
      {}
    );
    return renderBlogPage({
      pageName: "categories",
      categories: Object.entries(tags).map(([name, count]) => ({
        name,
        count
      }))
    });
  } else {
    return null;
  }
}

// src/render/routes/allPosts.ts
import { match } from "path-to-regexp";

// src/config/env.ts
var envConfigs = {
  PORT: process.env.PORT ?? "8000",
  OUTPUT_DIR: process.env.OUTPUT_DIR ?? "./out",
  POST_COUNT_PER_PAGE: process.env.POST_COUNT_PER_PAGE ?? process.env.ARTICLE_COUNT_PER_PAGE ?? "10"
};
var env_default = envConfigs;

// src/config/getPostCountPerPage.ts
function getPostCountPerPage(defaultValue = 15) {
  const parsed = parseInt(env_default.POST_COUNT_PER_PAGE);
  return isNaN(parsed) ? defaultValue : parsed;
}

// src/render/getPostsForPage.ts
var postCountPerPage = getPostCountPerPage();
function getTotalPages(posts) {
  return Math.ceil(posts.length / postCountPerPage);
}
function getPostsForPage(posts, page) {
  const totalPages = getTotalPages(posts);
  const postsForPage = posts.slice(
    postCountPerPage * (page - 1),
    postCountPerPage * page
  );
  return {
    posts: postsForPage,
    navigation: {
      total: totalPages,
      current: page
    }
  };
}

// src/render/routes/allPosts.ts
var macthPage = match("/page/:page");
async function tryRenderAllPosts(route, posts) {
  const postPageMatch = macthPage(route);
  if (postPageMatch) {
    const page = parseInt(postPageMatch.params.page ?? "1");
    const viewData = getPostsForPage(posts, page);
    return renderBlogPage({
      pageName: "all_posts",
      ...viewData
    });
  } else {
    return null;
  }
}

// src/utils/concat.ts
function concat(arr) {
  return arr.reduce((pv, cv) => {
    return pv.concat(cv);
  }, []);
}

// src/render/routes/allTags.ts
async function tryRenderAllTags(route, posts) {
  if (route === "/tags") {
    const tags = concat(posts.map((i) => i.content.metadata.tags ?? [])).reduce(
      (pv, cv) => {
        if (!(cv in pv)) pv[cv] = 1;
        else pv[cv] += 1;
        return pv;
      },
      {}
    );
    return renderBlogPage({
      pageName: "tags",
      tags: Object.entries(tags).map(([name, count]) => ({ name, count }))
    });
  } else {
    return null;
  }
}

// src/render/routes/categoriedPosts.ts
import { match as match2 } from "path-to-regexp";
var matchCategory = match2("/category/:category{/page/:page}");
async function tryRenderCategoriedPosts(route, posts) {
  const categoryPageMatch = matchCategory(route);
  if (categoryPageMatch) {
    const category = categoryPageMatch.params.category;
    const categoriedPosts = posts.filter(
      (i) => i.content.metadata.category === category
    );
    const page = parseInt(categoryPageMatch.params.page ?? "1");
    const viewData = getPostsForPage(categoriedPosts, page);
    return renderBlogPage({
      pageName: "categoried_posts",
      ...viewData,
      category
    });
  } else {
    return null;
  }
}

// src/render/routes/license.tsx
function tryRenderLicense(route) {
  if (route === "/license")
    return renderBlogPage({
      pageName: "license"
    });
  else return null;
}

// src/render/routes/post.ts
import { match as match3 } from "path-to-regexp";
var matchPost = match3("/post/:post_id");
async function tryRenderPost(route, posts) {
  const postMatch = matchPost(route);
  if (postMatch) {
    const postId = postMatch.params.post_id;
    const postIndex = posts.findIndex((i) => i.name === postId);
    const post = posts[postIndex], prevPostIndex = postIndex !== 0 ? postIndex - 1 : void 0, nextPostIndex = postIndex !== posts.length - 1 ? postIndex + 1 : void 0;
    let series = void 0;
    if (post.content.metadata.series) {
      const seriesId = post.content.metadata.series;
      const postsInSeries = posts.filter(
        (i) => i.content.metadata.series === seriesId
      );
      const seriesName = postsInSeries.map((i) => i.content.metadata.seriesName).filter((i) => !!i)[0];
      series = {
        name: seriesName,
        posts: postsInSeries
      };
    }
    return renderBlogPage({
      pageName: "post",
      post: {
        current: post,
        next: nextPostIndex ? posts[nextPostIndex] : void 0,
        previous: prevPostIndex ? posts[prevPostIndex] : void 0,
        series
      }
    });
  } else {
    return null;
  }
}

// src/render/routes/taggedPosts.ts
import { match as match4 } from "path-to-regexp";
var matchTag = match4("/tag/:tag{/page/:page}");
async function tryRenderTaggedPosts(route, posts) {
  const tagPageMatch = matchTag(route);
  if (tagPageMatch) {
    const tag = tagPageMatch.params.tag;
    const taggedPosts = posts.filter(
      (i) => i.content.metadata.tags?.includes(tag)
    );
    const page = parseInt(tagPageMatch.params.page ?? "1");
    const viewData = getPostsForPage(taggedPosts, page);
    return renderBlogPage({
      pageName: "tagged_posts",
      ...viewData,
      tag
    });
  } else {
    return null;
  }
}

// src/render/renderRoute.ts
var UnknownRouteError = class extends Error {
};
async function renderRoute(route, posts) {
  if (route === "/") return renderRoute("/page/1", posts);
  const rendered = (await Promise.all(
    [
      tryRenderAllPosts,
      tryRenderAllTags,
      tryRenderAllCategories,
      tryRenderCategoriedPosts,
      tryRenderTaggedPosts,
      tryRenderPost,
      tryRenderLicense
    ].map((i) => i(route, posts))
  )).filter((i) => !!i)[0] ?? null;
  if (rendered === null) throw new UnknownRouteError(`Unknown route: ${route}`);
  else return rendered;
}
function createRouteRenderer(posts) {
  return (route) => renderRoute(route, posts);
}

// src/utils/range.ts
function range(minInclduing, maxIncluding) {
  const result = [];
  for (let i = minInclduing; i <= maxIncluding; i++) {
    result.push(i);
  }
  return result;
}

// src/utils/unique.ts
function unique(arr) {
  return arr.reduce((pv, cv) => {
    if (!pv.includes(cv)) pv.push(cv);
    return pv;
  }, []);
}

// src/routes.ts
var postCountPerPage2 = getPostCountPerPage();
function getTagRoutes(posts) {
  const contents = posts.map((i) => i.content);
  const tags = unique(concat(contents.map((i) => i.metadata.tags ?? [])));
  let result = [];
  for (const tag of tags) {
    const totalPages = Math.ceil(
      contents.filter((i) => i.metadata.tags?.includes(tag)).length / postCountPerPage2
    );
    result = result.concat([
      `/tag/${encodeURIComponent(tag)}`,
      ...range(1, totalPages).map(
        (i) => `/tag/${encodeURIComponent(tag)}/page/${i}`
      )
    ]);
  }
  return result;
}
function getCategoryRoutes(posts) {
  const contents = posts.map((i) => i.content);
  const categories = unique(
    contents.filter((i) => !!i.metadata.category).map((i) => i.metadata.category)
  );
  let result = [];
  for (const category of categories) {
    const totalPages = Math.ceil(
      contents.filter((i) => i.metadata.category?.includes(category)).length / postCountPerPage2
    );
    result = result.concat([
      `/category/${encodeURIComponent(category)}`,
      ...range(1, totalPages).map(
        (i) => `/category/${encodeURIComponent(category)}/page/${i}`
      )
    ]);
  }
  return result;
}
async function getRoutes(posts) {
  const totalPages = Math.ceil(posts.length / postCountPerPage2);
  return [
    "/",
    "/tags",
    "/categories",
    "/license",
    ...range(1, totalPages).map((i) => `/page/${i}`),
    ...posts.map((i) => i.name).map((i) => `/post/${encodeURIComponent(i)}`),
    ...getTagRoutes(posts),
    ...getCategoryRoutes(posts)
  ];
}

// src/builder/feed.ts
import { Feed } from "feed";
import fs from "fs/promises";
import path3 from "path";
async function generateFeeds(outDir, posts) {
  const lang = process.env.BLOG_LANG ?? "ko";
  const blogUrl = `https://blog${lang === "ko" ? "" : `-${lang}`}.litehell.info`;
  const formatMessage = await createNodeFormatMessage(lang);
  const feed = new Feed({
    title: formatMessage("feed.title"),
    description: formatMessage("feed.description"),
    id: blogUrl,
    link: blogUrl,
    language: lang,
    image: "https://gravatar.com/avatar/837266b567b50fd59e72428220bf69b1",
    copyright: "All rights reserved 2020 ~ 2025 \xA9 Yeonjin Shin",
    updated: new Date(
      posts[0].content.metadata.last_modified_at ?? posts[0].content.metadata.date ?? ""
    ),
    feedLinks: {
      json: blogUrl + "/feed/json",
      atom: blogUrl + "/feed/atom"
    },
    author: {
      name: "Yeonjin Shin",
      email: "litehell@litehell.info",
      link: "https://litehell.info"
    }
  });
  for (const post of posts.filter((i) => i.content.lang === lang)) {
    const content = post.content.parsed;
    feed.addItem({
      title: post.content.metadata.title || formatMessage("feed.untitled"),
      id: post.name,
      link: `${blogUrl}/post/${encodeURIComponent(post.name)}`,
      description: post.content.metadata.subtitle || "",
      content,
      date: new Date(
        post.content.metadata.translated_at ?? post.content.metadata.date ?? ""
      ),
      image: getFirstImageFromHtml_default(content) || "https://gravatar.com/avatar/837266b567b50fd59e72428220bf69b1"
    });
  }
  await fs.mkdir(path3.join(outDir, "/feed"), { recursive: true });
  await fs.writeFile(path3.join(outDir, "/feed/rss"), feed.rss2());
  await fs.writeFile(path3.join(outDir, "/feed/atom"), feed.atom1());
  await fs.writeFile(path3.join(outDir, "/feed/json"), feed.json1());
}

// src/builder/index.ts
async function build(outDir, { quite = false } = {}) {
  const posts = (await getPosts({
    includeDrafts: false,
    preferredLang: process.env.BLOG_LANG
  })).sort(
    (a, b) => Date.parse(b.content.metadata.date ?? "") - Date.parse(a.content.metadata.date ?? "")
  );
  const routes = await getRoutes(posts);
  await mkdir(outDir, { recursive: true });
  await fsExtra.emptyDir(outDir);
  const renderRoute2 = createRouteRenderer(posts);
  await fsExtra.copy("./public", outDir);
  await fsExtra.copy("./posts", path4.join(outDir, "post"));
  await fsExtra.copy("./drafts", path4.join(outDir, "post"));
  if (!quite)
    console.log(
      "Routes to be rendered: \n" + routes.map((i) => `   ${i}`).join("\n")
    );
  await Promise.all(
    routes.map(async (route) => {
      const rendered = await renderRoute2(route);
      const fileName = path4.join(
        outDir,
        decodeURIComponent(route),
        "index.html"
      );
      const dirName = path4.dirname(fileName);
      await mkdir(dirName, { recursive: true });
      await fsExtra.writeFile(fileName, rendered);
    })
  );
  if (!quite) console.log("Generating feeds");
  await generateFeeds(outDir, posts);
}

// src/config/getPort.ts
import findFreePorts, { isFreePort } from "find-free-ports";
async function getPort() {
  const portEnv = parseInt(env_default.PORT ?? "8000");
  let port = isNaN(portEnv) ? 8e3 : portEnv;
  while (!isFreePort(port)) {
    port = (await findFreePorts())[0];
  }
  return port;
}

// src/server/devServer.ts
import { watch } from "fs";
import express from "express";
async function getPostsWithDraft() {
  return (await getPosts({
    includeDrafts: true,
    preferredLang: process.env.BLOG_LANG
  })).sort(
    (a, b) => Date.parse(b.content.metadata.date ?? "") - Date.parse(a.content.metadata.date ?? "")
  );
}
function createReloadPost(onRendererCreate) {
  let timeoutId = null;
  return () => {
    if (timeoutId !== null) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      console.log("Reloading posts....");
      getPostsWithDraft().then(
        (posts) => onRendererCreate(createRouteRenderer(posts))
      );
      console.log("Done reloading posts");
    }, 500);
  };
}
async function startDevServer(port) {
  console.log("NOTE: dev sever doesn't work on feed routes");
  console.log("Creating renderer....");
  let renderRoute2 = createRouteRenderer(
    await getPostsWithDraft()
  );
  console.log("Created");
  let reloadedTime = Date.now();
  const reloadPost = createReloadPost((newRenderer) => {
    reloadedTime = Date.now();
    renderRoute2 = newRenderer;
  });
  watch("./posts", { recursive: true }, reloadPost);
  watch("./drafts", { recursive: true }, reloadPost);
  const app = express();
  app.get(
    "/__dev__server__",
    (req, _res, next) => {
      const cur = parseInt(req.query.cur ?? "0");
      if (cur !== 0) {
        let delayResponseUntilReload = () => {
          if (cur === reloadedTime) setTimeout(delayResponseUntilReload, 100);
          else next();
        };
        delayResponseUntilReload();
      } else {
        next();
      }
    },
    (_req, res) => {
      res.type("application/json").end(JSON.stringify(reloadedTime));
    }
  );
  app.use(express.static("./public"));
  app.use("/post", express.static("./posts"));
  app.use("/post", express.static("./drafts"));
  app.use((req, res, next) => {
    renderRoute2(req.path).then((rendered) => {
      if (!req.path.endsWith("/")) {
        return res.redirect(301, req.path + "/");
      }
      res.type("text/html");
      res.end(
        rendered + `<script>
        (function(){
          let __dev_time=${reloadedTime};
          const checkNextBuild = (async function() {
            try {
              const newTimeRes = await fetch('/__dev__server__?cur=' + __dev_time);
              const newTime = await newTimeRes.json();
              if (newTime !== __dev_time)
                location.reload();
            } catch (err) {
              // Do nothing
            } finally {
              setTimeout(checkNextBuild, 50);
            }
          });
          checkNextBuild();
        })();
        </script>`
      );
    }).catch((err) => {
      if (err instanceof UnknownRouteError) {
        next();
      } else {
        next(err);
      }
    });
  });
  app.listen(port);
  console.log(`Listening on ${port}`);
}

// src/index.ts
async function main() {
  if (process.argv.includes("--watch")) {
    const port = await getPort();
    startDevServer(port);
  } else if (process.argv.includes("--build")) {
    const outDir = env_default.OUTPUT_DIR;
    build(outDir).then(() => console.log("Done"));
  } else {
    console.log("LiteHell's blog builder");
    console.log("");
    console.log("  --watch");
    console.log("    runs a server, which rebuilds on change");
    console.log("    If port is in use, the new unused port will be used");
    console.log(
      "    (default port: 8000, can be changed with PORT environment variable)"
    );
    console.log("");
    console.log("  --build");
    console.log("     build to directory");
    console.log(
      "     default output directory: out, can be changed with OUTPUT_DIR environment variable)"
    );
    console.log(
      "     Please do not use `dist` for output directory because it's used for js build"
    );
  }
}
main();
