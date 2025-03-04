const nameDisplay = document.getElementById('nameInput')
const jobDisplay = document.getElementById('jobInput')
const ageDisplay = document.getElementById('ageInput')
const bioDisplay = document.getElementById('bioInput')
const NameDisplay = document.getElementById('nameDisplay')
const JobDisplay = document.getElementById('jobDisplay')
const AgeDisplay = document.getElementById('ageDisplay')
const BioDisplay = document.getElementById('bioDisplay')


nameDisplay.addEventListener('input', (e) => {
    NameDisplay.textContent = e.target.value || "Not Provided"
})

jobDisplay.addEventListener('input', (e) => {
    JobDisplay.textContent = e.target.value || "Not Provided"
})

ageDisplay.addEventListener('input',(e) => {
    AgeDisplay.textContent = e.target.value || "Not Provided"
})

bioDisplay.addEventListener('input', (e) => {
    BioDisplay.textContent = e.target.value || "Not Provided"
})