const inputName = document.querySelector('.inp1')
const inputSurname = document.querySelector('.inp2')
const inputFindName = document.querySelector('.inp3')
const btn = document.querySelector('.btn')
const btn2 = document.querySelector('.btn2')
const FormData = document.querySelector('form.form')
const divResult = document.querySelector('.result')

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
    
    //div.innerHTML = find.name + ' ' + find.surName
    
    const p = document.createElement('p')               //створюю новий елемент, параграф
    const result = document.createTextNode('Знайдений користувач:'+ ' ' + find.name + ' ' + find.surName) //створюю текстовий вузол
    p.appendChild(result)                               //додаю до елементу параграф(P) текстовий вузол (result)
    const element = document.getElementById('result')   //знаходжу батьківський контейнер
    element.appendChild(p)                              //додаю до батьківського контейнеру параграф (P) в якому вже лежить текстовий вузол (result)
})
