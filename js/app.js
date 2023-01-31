const theme = window.localStorage.getItem("theme")
const btn = document.getElementById("imgDark")
const refresh = document.getElementById("refresh")

//verificar se o tema armazenado e dark
if (theme === "dark" ) {
    document.body.classList.add("dark")

}

btn.addEventListener('click', () => {

    document.body.classList.toggle("dark")

    if (theme === 'dark'){
        window.localStorage.setItem("theme", "light")
    } else {
        window.localStorage.setItem("theme", "dark")
    }
})
 
refresh.addEventListener("click", () => {
    window.location.reload()
})