const express = require("express")
const path = require("path")
const dotenv = require("dotenv").config()
const colors = require("colors")
const port = process.env.PORT || 5000

//* CONFIGURATION *//
const app = express()

// ENABLE BODY PARSER
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// SET STATIC FOLDER
app.use(express.static(path.join(__dirname, "public")))

//* ROUTES *//
app.use("/openai", require("./routes/openaiRoutes"))

//* SERVER *//
app.listen(port, () => {
  console.log(
    colors.cyan.bold.underline.italic(
      `Server running on http://localhost:${port}`
    )
  )
})
