const basicCost = document.querySelector('#basicCost')
const proCost = document.querySelector('#proCost')
const masterCost = document.querySelector('#masterCost')
const switchPayment = document.querySelector('.switch input')

changePayment();
switchPayment.addEventListener('input',()=>{
    changePayment()
})
function changePayment(){
        if(switchPayment.checked){
        basicCost.innerHTML = '19.99'
        proCost.innerHTML = '24.99'
        masterCost.innerHTML = '39.99'
    }else{
        basicCost.innerHTML = '199.99'
        proCost.innerHTML = '249.99'
        masterCost.innerHTML = '399.99'
    }
}
