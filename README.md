*Observable Plot on the command line*

Install this module with:
~~~bash
yarn
~~~

Add your own Plot definition in chart_svg.js, then run:

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

<video src="https://user-images.githubusercontent.com/7001/168634625-4daf68ef-961f-4c57-aeab-02a9a9aab1ed.mp4" width="400"></video>
