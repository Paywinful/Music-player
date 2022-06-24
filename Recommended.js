let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');
let first_song = document.querySelector('#index1');
let second_song = document.querySelector('#index2');
let third_song = document.querySelector('#index3');
let fourth_song = document.querySelector('#index4');
let fifth_song = document.querySelector('#index5');
let sixth_song = document.querySelector('#index6');
let wave = document.querySelector('#wave1');
let wave1 = document.querySelector('#wave2');
let wave2 = document.querySelector('#wave3');
// let seventh_song = document.querySelector('#index7');
// let eightth_song = document.querySelector('#index8');
// let ninth_song = document.querySelector('#index9');
// let tenth_song = document.querySelector('#index10');
// let eleventh_song = document.querySelector('#index11');
// let twelveth_song = document.querySelector('#index12');




let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   {
     name: "Rain",
     path: "./songs/s/Rain - AITCH ft AJ TRACEY ft TAY KEITH.mp3",
     img: "./img/R.jpg",
     singer: "Aitch"
   },
   {
     name: "Jowo",
     path: "./songs/s/Davido - Jowo (Official Audio).mp3",
     img: "./img/HG.jpg",
     singer: "Davido"
   },
   {
     name: "Invincible",
     path: "./songs/s/pop smoke - Invincible [Bass Boosted].mp3",
     img: "./img/I.jpg",
     singer: "Pop Smoke"
   },
   {
     name: "Holy Ground",
     path: "./songs/s/A Better Time CD 1 TRACK 4 (320).mp3",
     img: "./img/HG.jpg",
     singer: "Davido"
   },
   {
     name: "On the Low",
     path: "songs/s/Burna Boy On The Low.mp3",
     img: "./img/OTL.jpg",
     singer: "Burna Boy"
   },
   {
	name: "Cucumber",
	path: "songs/s/Big Conspiracy CD 1 TRACK 6 (128).mp3",
	img: "./img/CC.jpg",
	singer: "J-Hus"
  },
  {
	name: "Intro",
	path: "./songs/s/Jimmy Cooks - Drake  21 Savage (320).mp3",
	img: "./img/D.jpg",
	singer: "Drake"
  },
  {
	name: "Falling Back",
	path: "./songs/s/Jimmy Cooks - Drake  21 Savage (320) (2).mp3",
	img: "./img/D.jpg",
	singer: "Drake"
  },
  {
	name: "Text Go Green",
	path: "./songs/s/Jimmy Cooks - Drake  21 Savage (320) (3).mp3",
	img: "./img/D.jpg",
	singer: "Drake"
  },
  {
	name: "Currents",
	path: "./songs/s/Jimmy Cooks - Drake  21 Savage (320) (4).mp3",
	img: "./img/D.jpg",
	singer: "Drake"
  },
  {
	name: "A Keeper",
	path: "./songs/s/Jimmy Cooks - Drake  21 Savage (320) (5).mp3",
	img: "./img/D.jpg",
	singer: "Drake"
  },
  {
	name: "Calling My Name",
	path: "./songs/s/Jimmy Cooks - Drake  21 Savage (320) (6).mp3",
	img: "./img/D.jpg",
	singer: "Drake"
  },
  {
	name: "Sticky",
	path: "./songs/s/Jimmy Cooks - Drake  21 Savage (320) (7).mp3",
	img: "./img/D.jpg",
	singer: "Drake"
  },
  {
	name: "Massive",
	path: "./songs/s/Jimmy Cooks - Drake  21 Savage (320) (8).mp3",
	img: "./img/D.jpg",
	singer: "Drake"
  },
  {
	name: "Flight's Booked",
	path: "./songs/s/Jimmy Cooks - Drake  21 Savage (320) (9).mp3",
	img: "./img/D.jpg",
	singer: "Drake"
  }
];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
  wave_movement();
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	wave_nomovement();
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
// function autoplay_switch(){
// 	if (autoplay==1){
//        autoplay = 0;
//        auto_play.style.background = "rgba(255,255,255,0.2)";
// 	}else{
//        autoplay = 1;
//        auto_play.style.background = "#FF8A65";
// 	}
// }


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
}

function range_slider1(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
}

// first_song.addEventListener('click', ()=>{
// 	Playing_song = true;
// 	load_track(0);
// 	playsong();
// 	first_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
// })

function wave_movement(){
	wave.style.animation = 'wave 0.4s linear infinite';
	wave1.style.animation = 'wave 0.7s linear infinite';
	wave2.style.animation = 'wave 0.9s linear infinite';
}

function wave_nomovement(){
	wave.style.animation = 'unset';
	wave1.style.animation = 'unset';
	wave2.style.animation = 'unset';
}


function no1(){
	clearInterval(timer);
	
	first_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	track.src = All_song[0].path;
	title.innerHTML = All_song[0].name;	
	track_image.src = All_song[0].img;
    artist.innerHTML = All_song[0].singer;
	timer = setInterval(range_slider ,1000);
    track.load();
	playsong();
	range_slider();

	if(second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		second_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		third_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fourth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fifth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		sixth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
	
}
function no2(){
	clearInterval(timer);
	reset_slider();
	first_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	track.src = All_song[4].path;
	title.innerHTML = All_song[4].name;	
	track_image.src = All_song[4].img;
    artist.innerHTML = All_song[4].singer;
	timer = setInterval(range_slider ,1000);
    track.load();
	playsong();
	
	if(first_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		first_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		first_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		third_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fourth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fifth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		sixth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
}
function no3(){
	clearInterval(timer);
	reset_slider();
	second_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	track.src = All_song[5].path;
	title.innerHTML = All_song[5].name;	
	track_image.src = All_song[5].img;
    artist.innerHTML = All_song[5].singer;
	timer = setInterval(range_slider ,1000);
    track.load();
	playsong();

	if(second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		second_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(first_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		first_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		first_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fourth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fifth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		sixth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
	
}

function no4(){
	clearInterval(timer);
	reset_slider();
	third_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	track.src = All_song[3].path;
	title.innerHTML = All_song[3].name;	
	track_image.src = All_song[3].img;
    artist.innerHTML = All_song[3].singer;
	timer = setInterval(range_slider ,1000);
    track.load();
	playsong();

	if(second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		second_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		third_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(first_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		first_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		first_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fifth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		sixth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
	
}

function no5(){
	clearInterval(timer);
	reset_slider();
	fourth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	track.src = All_song[1].path;
	title.innerHTML = All_song[1].name;	
	track_image.src = All_song[1].img;
    artist.innerHTML = All_song[1].singer;
	timer = setInterval(range_slider ,1000);
    track.load();
	playsong();

	if(second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		second_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		third_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fourth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(first_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		first_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		first_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		sixth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
}

function no6(){
	clearInterval(timer);
	reset_slider();
	fifth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	track.src = All_song[2].path;
	title.innerHTML = All_song[2].name;	
	track_image.src = All_song[2].img;
    artist.innerHTML = All_song[2].singer;
	timer = setInterval(range_slider ,1000);
    track.load();
	playsong();

	if(second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		second_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		third_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fourth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fifth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(first_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		first_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		first_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
	
}

function no7(){
	clearInterval(timer);
	reset_slider();
	first_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	track.src = All_song[6].path;
	title.innerHTML = All_song[6].name;	
	track_image.src = All_song[6].img;
    artist.innerHTML = All_song[6].singer;
	timer = setInterval(range_slider ,1000);
    track.load();
	playsong();
	if(first_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		first_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
	if(second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		second_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		third_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fourth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fifth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		sixth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
}

function no8(){
	clearInterval(timer);
	reset_slider();
	first_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	track.src = All_song[7].path;
	title.innerHTML = All_song[7].name;	
	track_image.src = All_song[7].img;
    artist.innerHTML = All_song[7].singer;
	timer = setInterval(range_slider ,1000);
    track.load();
	playsong();

	if(first_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		first_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
	if(second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		second_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		third_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fourth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fifth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		sixth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
}

function no9(){
	clearInterval(timer);
	reset_slider();
	first_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	track.src = All_song[8].path;
	title.innerHTML = All_song[8].name;	
	track_image.src = All_song[8].img;
    artist.innerHTML = All_song[8].singer;
	timer = setInterval(range_slider ,1000);
    track.load();
	playsong();

	if(first_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		first_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
	if(second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		second_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		third_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fourth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fifth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		sixth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
}

function no10(){
	clearInterval(timer);
	reset_slider();
	first_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	track.src = All_song[9].path;
	title.innerHTML = All_song[9].name;	
	track_image.src = All_song[9].img;
    artist.innerHTML = All_song[9].singer;
	timer = setInterval(range_slider ,1000);
    track.load();
	playsong();

	if(first_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		first_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
	if(second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		second_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		third_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fourth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fifth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		sixth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
}

function no11(){
	clearInterval(timer);
	reset_slider();
	first_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	track.src = All_song[10].path;
	title.innerHTML = All_song[10].name;	
	track_image.src = All_song[10].img;
    artist.innerHTML = All_song[10].singer;
	timer = setInterval(range_slider ,1000);
    track.load();
	playsong();

	if(first_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		first_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
	if(second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		second_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		third_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fourth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fifth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		sixth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
}

function no12(){
	clearInterval(timer);
	reset_slider();
	first_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	track.src = All_song[11].path;
	title.innerHTML = All_song[11].name;	
	track_image.src = All_song[11].img;
    artist.innerHTML = All_song[11].singer;
	timer = setInterval(range_slider ,1000);
    track.load();
	playsong();

	if(first_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		first_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
	if(second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		second_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		third_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fourth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fifth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		sixth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
}

function no13(){
	clearInterval(timer);
	reset_slider();
	first_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	track.src = All_song[12].path;
	title.innerHTML = All_song[12].name;	
	track_image.src = All_song[12].img;
    artist.innerHTML = All_song[12].singer;
	timer = setInterval(range_slider ,1000);
    track.load();
	playsong();

	if(first_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		first_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
	if(second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		second_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		third_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fourth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fifth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		sixth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
}

function no14(){
	clearInterval(timer);
	reset_slider();
	first_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	track.src = All_song[13].path;
	title.innerHTML = All_song[13].name;	
	track_image.src = All_song[13].img;
    artist.innerHTML = All_song[13].singer;
	timer = setInterval(range_slider ,1000);
    track.load();
	playsong();

	if(first_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		first_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
	if(second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		second_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		third_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fourth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fifth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		sixth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
}

function no15(){
	clearInterval(timer);
	reset_slider();
	first_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	track.src = All_song[14].path;
	title.innerHTML = All_song[14].name;	
	track_image.src = All_song[14].img;
    artist.innerHTML = All_song[14].singer;
	timer = setInterval(range_slider ,1000);
    track.load();
	playsong();

	if(first_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		first_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
	if(second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		second_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		second_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		third_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		third_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fourth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fourth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		fifth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		fifth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}

	if(sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'){
		sixth_song.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}else{
		sixth_song.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
}

