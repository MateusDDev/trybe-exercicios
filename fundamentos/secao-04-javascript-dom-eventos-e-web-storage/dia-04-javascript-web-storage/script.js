window.onload = () => {
 const setBackgroundColor = (color) => {
   let content = document.querySelector(".content")
   content.style.backgroundColor = color
 }

 const setFontColor = (color) => {
   let paragraphs = document.querySelectorAll(".paragraph")
   for (let index = 0; index < paragraphs.length; index += 1) {
     paragraphs[index].style.color = color
   }
 }

 const setFontSize = (size) => {
   let paragraphs = document.querySelectorAll(".paragraph")
   for (let index = 0; index < paragraphs.length; index += 1) {
     paragraphs[index].style.fontSize = size
   }
 }

 const setLineHeight = (height) => {
   let paragraphs = document.querySelectorAll(".paragraph")
   for (let index = 0; index < paragraphs.length; index += 1) {
     paragraphs[index].style.lineHeight = height
   }
 }

 const setFontFamily = (family) => {
   let paragraphs = document.querySelectorAll(".paragraph")
   for (let index = 0; index < paragraphs.length; index += 1) {
     paragraphs[index].style.fontFamily = family
   }
 }

 // Cor de fundo da tela;
 let backgroundColorButtons = document.querySelectorAll("#background-color>button")
 for (let index = 0; index < backgroundColorButtons.length; index += 1) {
   backgroundColorButtons[index].addEventListener("click", (event) => {
     setBackgroundColor(event.target.innerHTML)
   })
   
   backgroundColorButtons[index].addEventListener("click", (event) => {
    localStorage.setItem('backgroundColorButtons', event.target.innerHTML)
   })
   setBackgroundColor(localStorage.backgroundColorButtons)
 }

 // Cor do texto;
 let fontColorButtons = document.querySelectorAll("#font-color>button")
 for (let index = 0; index < fontColorButtons.length; index += 1) {
   fontColorButtons[index].addEventListener("click", (event) => {
     setFontColor(event.target.innerHTML)
   })
   
   fontColorButtons[index].addEventListener("click", (event) => {
    localStorage.setItem('fontColorButtons', event.target.innerHTML)
   })
   setFontColor(localStorage.fontColorButtons)
 }

 // Tamanho da fonte
 let fontSizeButtons = document.querySelectorAll("#font-size>button")
 for (let index = 0; index < fontSizeButtons.length; index += 1) {
   fontSizeButtons[index].addEventListener("click", (event) => {
     setFontSize(event.target.innerHTML)
   })

   fontSizeButtons[index].addEventListener("click", (event) => {
    localStorage.setItem('fontSizeButtons', event.target.innerHTML)
   })
   setFontSize(localStorage.fontSizeButtons)
 }

 // Espaçamento entre as linhas do texto;
 let lineHeightButtons = document.querySelectorAll("#line-height>button")
 for (let index = 0; index < lineHeightButtons.length; index += 1) {
   lineHeightButtons[index].addEventListener("click", (event) => {
     setLineHeight(event.target.innerHTML)
   })

   lineHeightButtons[index].addEventListener("click", (event) => {
    localStorage.setItem('lineHeightButtons', event.target.innerHTML)
   })
   setLineHeight(localStorage.lineHeightButtons)
 }

 // Tipo da fonte (_Font family_).
 let fontFamilyButtons = document.querySelectorAll("#font-family>button")
 for (let index = 0; index < fontFamilyButtons.length; index += 1) {
   fontFamilyButtons[index].addEventListener("click", (event) => {
     setFontFamily(event.target.innerHTML)
   })

   fontFamilyButtons[index].addEventListener("click", (event) => {
    localStorage.setItem('fontFamilyButtons', event.target.innerHTML)
   })
   setFontFamily(localStorage.fontFamilyButtons)
 }
}