const employee = {
    name: "Jax",
    id: 897636,
    hireDate: 23,
    hireMonth: "Aug",
    hireYear: 2001,
    email:"jaxcompany",
    department:"Innovation",
    skills: ["UX", "prototyping", "research","documentation"]
}

const empSection = document.getElementById("employee")

empSection.insertAdjacentHTML("afterbegin", `<h2>Welcome ${employee.name}!</h2>`)

const empInfo = `
<dl>
    <dt>ID</dt>
    <dd>${employee.id}</dd>
    <dt>Department</dt>
    <dd>${employee.department}</dd>
    <dt>Year Hired</dt>
    <dd>${employee.hireYear}</dd>
    <dt>Email</dt>
    <dd>${employee.email}</dd>
</dl>
`