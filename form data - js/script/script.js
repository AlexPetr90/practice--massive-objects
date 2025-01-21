const inputName = document.querySelector('.inp1')
const inputSurname = document.querySelector('.inp2')
const inputFindName = document.querySelector('.inp3')
const btn = document.querySelector('.btn')
const btn2 = document.querySelector('.btn2')
const FormData = document.querySelector('form.form')
const div = document.querySelector('.result')
const list = [
    {
        name: 'Хтось',
        surName: 'Щось',
    }
];
btn.addEventListener('click', (ev) => {
    const name = inputName.value
    const surName = inputSurname.value
    //console.log(inpName)
    //console.log(inpSurName)
  
    list.push({
        name,
        surName,
    })
console.log(list)
})
// btn2.addEventListener('click', (ev) => {
//     const findName = inputFindName.value
//     const find = list.find(({ name }) => name === findName)
//     console.log(find)    
// })
btn2.addEventListener('click', (ev) => {
    const findName = inputFindName.value
    const find = list.find(item => item.name === findName)
    console.log(find);
    //div.innerHTML = find.name + ' ' + find.surName

    const table = document.createElement('table')
    const tableBoddy = document.createElement('tbody')
    table.appendChild(tableBoddy);

    const row = document.createElement('tr')
    
    const name = document.createElement('td')
    const surName = document.createElement('td')
        
    name.textContent = find.name
    surName.textContent = find.surName

    row.appendChild(name)
    row.appendChild(surName)

    tableBoddy.appendChild(row)
    document.body.appendChild(table)
})
