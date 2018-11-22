var $clickGetNum=$("#clickGetNum");
var $clickGetScond=$("#clickGetScond");
var timerback;
var timeNum=5;
	$clickGetNum.click(function(){
	    $clickGetScond.html(timeNum+ "s")
		$clickGetNum.css({display:"none"})
		$clickGetScond.css({display:"block"})
		timerback=setInterval(function(){
			if(timeNum>0){
				timeNum--;
				$clickGetScond.html(timeNum+ "s")
			}else{
				/*$clickGetNum.css({display:"none"})
		        $clickGetScond.css({display:"block"})*/
		        clearInterval(timerback);
		        $clickGetNum.css({display:"block"})
		        $clickGetScond.css({display:"none"})
		       timeNum=5
			}

		},1000)


	})