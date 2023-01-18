function onSubmit(e) {
  e.preventDefault()

  document.querySelector(".msg").textContent = ""
  document.querySelector("#image").src = ""

  const prompt = document.querySelector("#prompt").value
  const size = document.querySelector("#size").value

  if (prompt === "") {
    alert("Describe your desired picture with text...")
    return
  }

  generateImageRequest(prompt, size)
}

async function generateImageRequest(prompt, size) {
  try {
    showSpinner()

    const response = await fetch("/openai/generateImage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        size,
      }),
    })

    if (!response.ok) {
      removeSpinner()
      throw new Error("That image could not be generated")
    }

    const image = await response.json()

    const imageUrl = image.data

    document.querySelector("#image").src = imageUrl

    removeSpinner()
    // console.log(data)
  } catch (error) {
    document.querySelector(".msg").textContent = error
  }
}

function showSpinner() {
  document.querySelector(".spinner").classList.add("show")
}

function removeSpinner() {
  document.querySelector(".spinner").classList.remove("show")
}

document.querySelector("#image-form").addEventListener("submit", onSubmit)
