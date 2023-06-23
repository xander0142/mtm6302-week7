const employee = {
    name: "Jax",
    id: 897636,
    hireDate: 23,
    hireMonth: "Aug",
    hireYear: 2001,
    email:"jaxcompany",
    department:"Innovation"
}

const empSection = document.getElementById("employee")

empSection.insertAdjacentHTML("afterbegin", `<h2>Welcome ${employee.name}!</h2>`)
