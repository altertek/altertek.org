const fs = require("fs");
const { DateTime } = require('luxon');


module.exports = eleventyConfig => {

  // Display 404 page in BrowserSnyc
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: (err, bs) => {
        const content_404 = fs.readFileSync("dist/en/404/index.html");

        bs.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  // or, use a Universal filter (an alias for all of the above)
  eleventyConfig.addFilter("frDate", (date) => {
    return DateTime.fromJSDate(date).toFormat('dd.MM.yyyy')
  });

  eleventyConfig.addFilter("engDate", (date) => {
    return DateTime.fromJSDate(date).toFormat('yyyy.MM.dd')
  });

  // Return the smallest number argument
   eleventyConfig.addFilter("min", (...numbers) => {
     return Math.min.apply(null, numbers);
   });

   // Get the first `n` elements of a collection.
     eleventyConfig.addFilter("head", (array, n) => {
       if( n < 0 ) return array.slice(n);

       return array.slice(0, n);
     });

  // Returning something from the configuration function is optional
  return {
    dir: {
      input: "src",
      output: "dist",
    },
    templateFormats: ["njk", "md"],
    // htmlTemplateEngine: "njk",
    // markdownTemplateEngine: "njk",
    passthroughFileCopy: false
  };
};
