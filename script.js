//Event Listener
document.getElementById('get-joke').addEventListener('click',getJokes);

//getJokes function
function getJokes(e){

	//get value form form
	const number = document.querySelector('input[type="text"]').value;

	const xhr = new XMLHttpRequest();

	xhr.open('GET',`https://api.icndb.com/jokes/random/${number}`,true);

	xhr.onreadystatechange = function(){
		if(this.status === 200 && this.readyState === 4){
			const jokes = JSON.parse(this.responseText);
			let output = '';
			if(jokes.type == 'success'){
				jokes.value.forEach(function(joke,index){
					output += `
						<li class="list-group-item">
    						${index+1} - ${joke.joke}
    					</li>
					`;
				});
			}else{
				output += '<li class="list-group-item"><p class="text-danger text-center">Something Wrong</p></li>'
			}
			document.getElementById('joke-lists').innerHTML = output;
		}
	}

	xhr.send();

	e.preventDefault();
}