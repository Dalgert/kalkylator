

$('button').click(function() {
	let result='', num1='', num2='', num='100',s=0
	// document.querySelector('#numbers').addEventListener('click',function(e){
	// if (e.target.classList.contains('myclass')) {

	    num= $(this).val();
	    console.log(num)

		    if (s!=1){
		    	num1=num1+num
		    } else {
		    	num2=num2+num
		    }
	    console.log(num)
	    console.log(num2)
	}
})
}
)