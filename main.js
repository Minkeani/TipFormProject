

document.querySelector('button').addEventListener('click', ()=> {
    let allSum = document.createElement('span')
    let sum = document.querySelector('.sum')
    let alls = (Number(sum.value) + Number((sum.value*document.querySelector('select').value))).toFixed(1)
    let tax = (sum.value*document.querySelector('select').value).toFixed(2)
    let pay = (alls/document.querySelector('.count').value).toFixed(2)
    allSum.textContent += ` $ ${tax}, ` 
    allSum.innerHTML += ` $ ${alls}, `  
    allSum.innerHTML += `$  ${pay}` 

    document.querySelector('.result').append(allSum)
})