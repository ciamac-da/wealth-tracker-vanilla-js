const main = document.getElementById("main")
const addUserBtn = document.getElementById("add-user")
const doubleBtn = document.getElementById("double")
const showMillionairesBtn = document.getElementById("show-millionaires")
const sortBtn = document.getElementById("sort")
const calculateWealthBtn = document.getElementById("calculate-wealth")

const data = []

// Fetch random user and add the money
const getRandomUser = async () => {
const res = await fetch("https://randomuser.me/api/")
const data = await res.json()
const user = data.results[0]
const newUser = {
  name :`${user.name.first} ${user.name.last}`,
  money: Math.floor(Math.random()*1000000)
}
addData(newUser)
}
getRandomUser()
getRandomUser()
getRandomUser()

// Add new obj to data arr
const addData = (obj) => {
data.push(obj)
updateDOM()
}

// Update DOM
const updateDOM = (provideData = data) => {
// Clear main DIV
main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>"

provideData.forEach(item => {
const element = document.createElement("div")
element.classList.add("person")
element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`
main.appendChild(element)
})
}

// Format number to currency string
const formatMoney = (number) => {
return  "$"+ number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Add User Event
addUserBtn.addEventListener("click", getRandomUser)
