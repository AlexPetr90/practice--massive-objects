const inputName = document.querySelector('.inp1')
const inputSurname = document.querySelector('.inp2')
const inputFindName = document.querySelector('.inp3')
const btn = document.querySelector('.btn')
const btn2 = document.querySelector('.btn2')
const FormData = document.querySelector('form.form')

const list = [
    {
        name: 'Хтось',
        surname: 'Щось',
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

})
