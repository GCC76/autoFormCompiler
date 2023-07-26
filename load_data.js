//	*********************************************
//	formCompiler BY Gian Carlo Ciaccolini
//	https://github.com/GCC76
//	Not for commercial use
//

const form = document.querySelector("#myForm");

const fileReader = (file,callback) => {

	let reader = new FileReader();
	reader.onload = (event) => {
		const fileContent = JSON.parse(event.target.result);
		callback(fileContent);
	}
	reader.readAsText(file);
}


form.addEventListener("submit", event => {
	
	event.preventDefault();
	
	let file = form.file.files[0];
	let data = fileReader(file, fileData =>{
		dataSend(fileData);
		form.reset();
	})
	
})


function dataSend(data){
	
	chrome.tabs.query({active: true}, async function(tabs){
		const response = await chrome.tabs.sendMessage(tabs[0].id,data);
	})
}




	
	
	

