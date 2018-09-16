

var equal = 0;

$(".equal").click(
	function()
	{
	 // console.log(eval(frm.txt.value));
	 frm.txt.value = eval(frm.txt.value);
	 equal = 1;
	}
)

$(".digit").click(
    function() 
    {
       if(equal == 0) frm.txt.value = frm.txt.value + this.value;
       else frm.txt.value = this.value;
    }

)

$(".operation").click(
    function() {
    	frm.txt.value = frm.txt.value + this.value;
    	equal = 0;
    }
)

$("#clear").click(
    function() {
    	frm.txt.value = "";
    	equal = 0;

    }
)
