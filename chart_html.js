import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import {withJsdom} from "./jsdom.js";
import beautify from "js-beautify";

async function chart() {
  const penguins = await d3.csv("data/penguins.csv", d3.autoType);
  return Plot.plot({
    grid: true,
    x: {
      label: "Body mass (g) →"
    },
    y: {
      label: "↑ Flipper length (mm)"
    },
    symbol: {
      legend: true
    },
    marks: [
      Plot.dot(penguins, {x: "body_mass_g", y: "flipper_length_mm", stroke: "species", symbol: "species"})
    ]
  });
}

const root = await withJsdom(chart)();
for (const svg of root.tagName === "svg" ? [root] : root.querySelectorAll("svg")) {
  svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns", "http://www.w3.org/2000/svg");
  svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
}
console.log(beautify.html(root.outerHTML, {indent_size: 2}));
