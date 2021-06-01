var searchBar=document.getElementById("searchBar");
var searchButton=document.getElementById("searchButton");
var games = document.querySelectorAll(".Game");
var results = document.getElementById("results");


function searchGames(event){
  event.preventDefault();
  
  var search = searchBar.value
  
  results.innerHTML= "<strong>results for " + search + "</strong>"
  
  
  for(var i = 0; i < games.length; i++){
    
    var gameValues=(games[i].getAttribute("data-value"))
    
    if(gameValues.includes(search.toLowerCase())){
      console.log (true)
      games[i].style.display="block";
      
    }
  else{
    games[i].style.display="none";
    console.log (false)
  }
  
  }
  searchBar.value = "";
  
  
}






searchButton.addEventListener("click", searchGames)



// function check(form)
// {
//   if(form.userid.value == "sebastian" && form.pswrd.value == "123")
// {
//   window.open('file:///Users/sebastianreyna/Desktop/Videogame%20webpage/index.html');
// {
//   else {
    
//     alert("the name and password you enterd don't match")
//   {
    
//   }
