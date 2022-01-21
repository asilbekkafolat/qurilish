
//Statistics scroll
$(window).scroll(function () { 
    // counter1
    const numCheck1 = document.querySelector('.counter-k').innerHTML;
    if($(document).scrollTop() > 800) {
        let check1 = true;
    if(+numCheck1 > 0){ check1=false}

        const counterK1 = document.querySelectorAll('.counter-k');

        if(check1 == true) {
            counterK1.forEach(counter => {
                const updateCount = () => {
                const speed = 2000;
                const target = +counter.getAttribute('data-target');
                const countNumber = +counter.innerText;
        
                const inc = target / speed;
        
                if(countNumber < target) {
                    counter.innerText = Math.ceil(countNumber + inc);
                    setTimeout(updateCount, 140);
                }
                else{
                    countNumber.innerText = target;
                }
                } 
        
                updateCount();
                });
            }
        }

    // counter2

    const numCheck2 = document.querySelector('.counter-98').innerHTML;
    if($(document).scrollTop() > 800) {
        let check2 = true;
    if(+numCheck2 > 0){ check2=false}

        const counterK2 = document.querySelectorAll('.counter-98');

        if(check2 == true) {
            counterK2.forEach(counter => {
                const updateCount = () => {
                const speed = 2000;
                const target = +counter.getAttribute('data-target');
                const countNumber = +counter.innerText;
        
                const inc = target / speed;
        
                if(countNumber < target) {
                    counter.innerText = Math.ceil(countNumber + inc);
                    setTimeout(updateCount, 180);
                }
                else{
                    countNumber.innerText = target;
                }
                } 
        
                updateCount();
                });
            }
        }

    // counter3

    const numCheck3 = document.querySelector('.counter-100').innerHTML;
    if($(document).scrollTop() > 800) {
        let check3 = true;
    if(+numCheck3 > 0){ check3=false}

        const counterK3 = document.querySelectorAll('.counter-100');

        if(check3 == true) {
            counterK3.forEach(counter => {
                const updateCount = () => {
                const speed = 1500;
                const target = +counter.getAttribute('data-target');
                const countNumber = +counter.innerText;
        
                const inc = target / speed;
        
                if(countNumber < target) {
                    counter.innerText = Math.ceil(countNumber + inc);
                    setTimeout(updateCount, 400);
                }
                else{
                    countNumber.innerText = target;
                }
                } 
        
                updateCount();
                });
            }
        }

});






// OWL 
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    slideTransition: 'linear',
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        770:{
            items:2
        },
        1000:{
            items:4
        }
    }
})