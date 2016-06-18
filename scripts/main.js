$(document).ready(function(){

  $('#sidebar').css('display', 'none');
  $('#quote').css('display', 'none');
// Our Quotes Array
    var quotes = [

        {
          quote: 'You have to be able to accept failure to get better.' ,
          speaker: 'LeBron James',
          imageURL: 'https://pbs.twimg.com/profile_images/686027837283807233/NSARqVck.png'
        },
        {
          quote: "I've failed over and over and over again in my life and that is why I succeed.",
          speaker: 'Michael Jordan',
          imageURL: 'https://setouq.com/wp-content/uploads/2015/12/michael-jordan-quotes-150x150.jpg'
        },
        {
          quote: "And Choco Taco brings me life.",
          speaker: 'Riff Raff',
          imageURL: 'http://ichef.bbci.co.uk/images/ic/256x256/p03byj9z.jpg'
        },
        {
          quote: "When someone comes along and expresses him or herself as freely as they think, people flock to it. They enjoy it.",
          speaker: 'Joe Rogan',
          imageURL: 'https://cdn5.player.fm/images/1807559/series/TlWiY0wP3j6LwHAH/256.jpg'
        },
        {
          quote: "If you can't take a joke, take a shuttle.",
          speaker: 'Joey Diaz',
          imageURL: 'http://s1.evcdn.com/images/block/I0-001/024/395/340-1.jpeg_/special-event-joey-diaz-40.jpeg'
        },
        {
          quote: "I think if you get kicked in the face you deserved it because that means that you watched the foot come to your face." ,
          speaker: 'Kevin Hart',
          imageURL: 'http://pbs.twimg.com/profile_images/2759299548/24cb1f1c8febbb7b94830b69fb103ff2.jpeg'
        },
        {
          quote: "Ask anybody over 30 – if they tell you they have more than 10 friends, you know they’re counting co-workers." ,
          speaker: 'Tom Papa',
          imageURL: 'http://s2.evcdn.com/images/medium/I0-001/024/088/325-3.jpeg_/tom-papa-25.jpeg'
        },
        {
          quote: "Sup KANE!" ,
          speaker: 'Tom Segura',
          imageURL: 'http://s3.evcdn.com/images/thumb/I0-001/027/551/150-7.png_/tom-segura-50.png'
        },
        {
          quote: "Im amazine with Jeezy" ,
          speaker: 'Christina Millian',
          imageURL: 'https://lh3.googleusercontent.com/-n3DW50b4pAY/AAAAAAAAAAI/AAAAAAAAAB4/Kate8GSNgfg/s46-c-k-no/photo.jpg'
        },
        {
          quote: "Its just you and me" ,
          speaker: 'Cassie',
          imageURL: 'http://img2-ak.lst.fm/i/u/64s/ae25814e2fa0419bc1a0e78738006487.jpg'
        }
    ];
// Our Functions
     function change_bg_color(){
       var num = Math.random();
       num = num.toString();
       num = num.slice(3, 9);
       var colour = '#' + num;
       $('body').css('background-color', colour);
     }

     function log_quote(array) {
       var value = array[Math.round(Math.random()*10)];
       
       $('#sidebar').css('display', 'initial');
   
       $('#quote').css('display', 'block');

       for (var key in value){
        console.log(value[key]);

        if(key === "quote"){
          $('#quote').text(value[key]);
        }
        
        if(key === "speaker"){
          $('#person').text(value[key]);
        }

        if(key === "imageURL"){
          $('#image').attr('src', value[key]);
        }

       }
       // console.log(value);
       // $('#para').text(value);
     }

     // Calls functions when button is clicked
      $("#btn").on('click', function(){
       change_bg_color();
       log_quote(quotes);
      });

});