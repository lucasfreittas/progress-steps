const progressBar = document.getElementById('progress');
const next = document.getElementById('nextBtn');
const prev = document.getElementById('prevBtn');
const circles = document.querySelectorAll('.circle')


let count = 1;

next.addEventListener('click', () => {
    count ++
    
    if(count > circles.length){
        count = 4
    };
    update()    
    console.log(count)
});

prev.addEventListener('click', () => {
    count --
    
    if(count < 1){
        count = 1
    };
    update()    
    console.log(count)
});


function update(){
    if(count === 1){
        prev.disabled = true
    } else if (count === 4){
        next.disabled = true
    } else{
        next.disabled = false
        prev.disabled = false
    }

    let progress = (count * 33) - 33
    progressBar.style.width = `${progress}%`

    circles.forEach((circle, index) => {
        if(index < count) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

}
