*Observable Plot on the command line*

Add your own Plot definition in index.js, then run:

~~~bash
node chart_svg.js > result.svg
~~~

or, with a converter installed (such as ImageMagick):
~~~bash
node chart_svg.js | convert - result.png
~~~

If the chart has a legend, or a caption, Plot returns an HTML node instead of a SVG node:
~~~bash
node chart_html.js > result.html
~~~

