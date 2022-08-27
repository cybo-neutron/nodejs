## Using body-parser
```
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}))

```

## **using Static file in nodejs**
``` js
app.use(express.static("public"))

```
**Using tailwind in simple node project**  
Follow the steps in tailwind official website
To use the `ouput.css` file  use the above static file requirement.

### **Post request in nodejs**
Specify `<form>` with `method="post"` and `action = "/<specify it yourself>"`

```js
app.post("/", (req, res) => {
  console.log(req.body);
  console.log([req.body.firstName, req.body.lastName, req.body.email]);
});

```