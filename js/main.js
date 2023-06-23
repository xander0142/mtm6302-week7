const employee = {
    name: "Jax",
    id: 897636,
    hireDate: 23,
    hireMonth: "Aug",
    hireYear: 2001,
    email:"jaxcompany",
    department:"Innovation",
    skills: ["UX", "prototyping", "research","documentation"],
    address:{
        street:"123 Street",
        city:"Merlot",
    },
    selfIntro: function(){
        console.log()
        const introTemp = `Hi I am ${this.name}, I started working in ${this.department} since ${this.hireDate} ${this.hireMonth}, ${this.hireYear}`
        return introTemp 
    }
}

const empSection = document.getElementById("employee")

empSection.insertAdjacentHTML("afterbegin", `<h2>Welcome ${employee.name}!</h2>`)

//updating property value
employee.department = "Innovation and Research"

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

empSection.insertAdjacentHTML(beforeend, empInfo)

const empSkills = employee.skills.join(",")
empSection.insertAdjacentHTML("beforeend", `<p>${employee.name} is skilled in ${empSkills}</p>` )

//adding new property - not recommended 
employee.pronouns = "They/Them"
empSection.insertAdjacentHTML("beforeend", `<p>${employee.name} uses pronouns ${employee.pronouns}</p>`)

empSection.insertAdjacentHTML("beforeend", `<p>Address: ${employee.address.street}, ${employee.address.city}</p>`)

employee.selfIntro() 

console.log (Object.keys(employee))