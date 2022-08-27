The backend server handles the calculation. This is helpful to perform complex calculation and send the response to the frontend.


**directory** -> `__dirname`


## body-parser
npm i body-parser

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:true}))

Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option. This parser accepts only UTF-8 encoding of the body and supports automatic inflation of gzip and deflate encodings.

The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true). The "extended" syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded. For more information, please see the qs library.

Defaults to true, but using the default has been deprecated. Please research into the difference between qs and querystring and choose the appropriate setting.