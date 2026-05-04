let btn=document.querySelectorAll('.question');
btn.forEach(function(button){
    button.addEventListener('click',function(){
    var faq=this.closest('.faq');
    
if(faq.classList.contains('active')){
faq.classList.remove('active');
}

else{

document.querySelectorAll('.faq').forEach(function(item){
item.classList.remove('active');
});

faq.classList.add('active');

}

});

});
    
