const buttons = document.querySelectorAll('.color-box')
const body = document.querySelector('body')

buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        if (e.target.id === 'gray'){
            body.style.backgroundColor = 'grey'
        }
        else if (e.target.id === 'white'){
            body.style.backgroundColor = 'white'
        }
        else if (e.target.id === 'blue'){
            body.style.backgroundColor = 'blue'
        }
        else if (e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow'
        }
        else if (e.target.id === 'green'){
            body.style.backgroundColor = 'green'
        }
        else if (e.target.id === 'purple'){
            body.style.backgroundColor = 'purple'
        }
        else if (e.target.id === 'orange'){
            body.style.backgroundColor = 'orange'
        }
        else if (e.target.id === 'pink'){
            body.style.backgroundColor = 'pink'
        }
        else if (e.target.id === 'brown'){
            body.style.backgroundColor = 'brown'
        }

    })
})
