import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import {withJsdom} from "./jsdom.js";
import beautify from "js-beautify";

async function chart() {
  const data = await d3.csv("data/penguins.csv", d3.autoType);
  return Plot.plot({
    y: {
      grid: true
    },
    marks: [
      Plot.barY(data, Plot.groupX({y: "count"}, {x: "species", fill: "island"})),
      Plot.ruleY([0])
    ]
  });
}

const root = await withJsdom(chart)();
for (const svg of root.tagName === "svg" ? [root] : root.querySelectorAll("svg")) {
  svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns", "http://www.w3.org/2000/svg");
  svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
}
console.log(beautify.html(root.outerHTML, {indent_size: 2}));
