let num = [5,8,2,9,3]

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)
pos= num.indexOf(4)

if (pos == -1){
    console.log('este número não existe')
} else {
    console.log(`O valor está na posição ${pos}`)
}