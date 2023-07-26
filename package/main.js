//	*********************************************
//	formCompiler BY Gian Carlo Ciaccolini
//	https://github.com/GCC76
//	Not for commercial use
// 	********************************************

chrome.runtime.onMessage.addListener(
	
	function(data, sender, sendResponse) {
		
		const focusEvent = new Event('focus', { bubbles: true });
		const changeEvent = new Event('change', { 'view': window, 'bubbles': true });
		const blurEvent	= new Event('blur', { bubbles: true });
		
		Object.keys(data).forEach( field => {
			
			let input = document.querySelector("[name='"+field+"']");
			let type = input.type;
			
			switch(type){
				
				case "checkbox":
				case "radio":
				
				input = document.querySelector("[name='"+field+"'][value='"+ data[field]+"']");
				input.dispatchEvent(focusEvent);
				input.setAttribute("checked","checked");
				input.dispatchEvent(changeEvent);
				input.dispatchEvent(blurEvent);
				break;
				
				case "select-one":
				input = document.querySelector("[name='"+field+"'] option[value='"+ data[field]+"']");
				input.dispatchEvent(focusEvent);
				input.setAttribute("selected",true);
				input.dispatchEvent(changeEvent);
				input.dispatchEvent(blurEvent);
				break;
				
				default:
				input.dispatchEvent(focusEvent);
				input.setAttribute("value", data[field]);
				input.dispatchEvent(changeEvent);
				input.dispatchEvent(blurEvent);
				break;
				
			}
		});
	}
);