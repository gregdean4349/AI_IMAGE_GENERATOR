const express = require("express")
const dotenv = require("dotenv").config()
const colors = require("colors")
const port = process.env.PORT || 5000

//* CONFIGURATION *//
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//* ROUTES *//
app.use("/openai", require("./routes/openaiRoutes"))

//* SERVER *//
app.listen(port, () => {
  console.log(
    colors.cyan.bold.underline.italic(`Server started on port ${port}`)
  )
})
