

const template = {
  type: "page",
  id: 6219984235,
  html(content) {
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <title></title>
              {{standard_header_includes}}
            </head>
            <body>
              <header>
                <div class="inner">
                  <h1>${content}</h1>
                </div>
              </header>
              {{standard_footer_includes}}
            </body>
            </html>`;
  } 
};




module.exports = { template };





                     