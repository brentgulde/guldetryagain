
$('#up2').html(`
	
	<div class="progress">
    <div class="indeterminate"></div>
	</div>
`);


setTimeout(function(){	//**preloader to wait 0.7secs to load the inside the body
	y();
},777);

function y(){


$.ajax({
		url: "http://www.omdbapi.com/?t=x-men"
		
	}).done(function(ret){
		console.log(ret);
		let html = `
		<center>

<h1 style="font-size:2500%; font-family:Impact;">${ret.Title}</h1>
<h1 style="font-size:2500%; font-family:Impact;">${ret.Poster}</h1>
<h1 style="font-size:2500%; font-family:Impact;">${ret.Released}</h1>
<h1 style="font-size:2500%; font-family:Impact;">${ret.Genre}</h1>
<h1 style="font-size:2500%; font-family:Impact;">${ret.Director}</h1>
		
		</center>

		`;
		$('#up2').html(html);
	});
}

$('#up3').html(`
	<div class="progress">
    <div class="indeterminate"></div>
	</div>
`);


  setTimeout(function(){	//**preloader to wait 0.7secs to load the inside the body
	z();
},777);

function z(){


$.ajax({
		url: "https://www.omdbapi.com/?t=gotham&Season=2"
		
	}).done(function(ret){
		console.log(ret);
		let html = `
<center>
<h1 style="font-size:2500%; font-family:Impact;">${ret.Title}</h1>
<h1 style="font-size:2500%; font-family:Impact;">${ret.Poster}</h1>
<h1 style="font-size:2500%; font-family:Impact;">${ret.Released}</h1>
<h1 style="font-size:2500%; font-family:Impact;">${ret.Genre}</h1>
<h1 style="font-size:2500%; font-family:Impact;">${ret.Director}</h1>
</center>

		`;
		$('#up3').html(html);
	});
}

$('#up4').html(`
	<div class="progress">
    <div class="indeterminate"></div>
	</div>
`);


  setTimeout(function(){	//**preloader to wait 0.7secs to load the inside the body
	b();
},777);

function b(){


$.ajax({
		url: "https://www.omdbapi.com/?t=gotham&Season=3"
		
	}).done(function(ret){
		console.log(ret);
		let html = `
<center>
		<h1 style="font-size:2500%; font-family:Impact;">${ret.Title}</h1>
<h1 style="font-size:2500%; font-family:Impact;">${ret.Poster}</h1>
<h1 style="font-size:2500%; font-family:Impact;">${ret.Released}</h1>
<h1 style="font-size:2500%; font-family:Impact;">${ret.Genre}</h1>
<h1 style="font-size:2500%; font-family:Impact;">${ret.Director}</h1>
</center>
		`;
		$('#up4').html(html);
	});
}

//or
//$('#app').html(`
//	<h1>Ras</h1>
//`);
//	or
//let app = document.querySelector("#app");
//app.innerHTML = "<h1>Ras</h1>";
//	or
//let app = document.GetElementById("#app");
//app.innerHTML = "<h1>Ras</h1>";