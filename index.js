const main = document.getElementById("main")
const addUserBtn = document.getElementById("add-user")
const doubleBtn = document.getElementById("double")
const showMillionairesBtn = document.getElementById("show-millionaires")
const sortBtn = document.getElementById("sort")
const calculateWealthBtn = document.getElementById("calculate-wealth")

let data = []

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


// Double Money
const doubleMoney = () => {
  data = data.map(user => {
    return {...user, money: user.money * 2}
  })
  updateDOM()
}

// Show only millionaires
const showMillionaires = () => {
  data = data.filter(user => user.money > 1000000)
  updateDOM()
}

// Sort by richest
const sortByRichest = () => {
  data.sort((a,b) => {
    return b.money - a.money
  })
  updateDOM()
}


// Calculate wealth
const calculateWealth = () => {
  const wealth = data.reduce((acc, user) => {
    return (acc += user.money)
  }, 0)
  const wealthEl = document.createElement("div")
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`
  main.appendChild(wealthEl)
}


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
doubleBtn.addEventListener("click", doubleMoney)
sortBtn.addEventListener("click", sortByRichest)
showMillionairesBtn.addEventListener("click", showMillionaires)
calculateWealthBtn.addEventListener("click", calculateWealth)
