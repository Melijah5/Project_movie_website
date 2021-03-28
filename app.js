$(document).ready(function() {

    var radioTitle = "horror";
    var api_key = "d0764cf9a7f1fd8815e4c7267f190a2f"
    var url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=` + radioTitle;
    var collection = "";



    fetch(url);

    // adding radio button

    $("input[type='radio']").click(function() {

        $('#results').empty();
        radioTitle = $("input[name='title']:checked").val();
        url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=` + radioTitle;

        if (radioTitle) {
            fetch(url);
        }

        // fetch data from the given

        fetch(url)
            .then((response) => (response.json()))
            .then(function(data) {
                // console.log(data);

                // loop through each element in the json
                //return the value in the given html format

                data.results.forEach(movie => {
                    collection = `<div class = "well">
    
            
                <dive class="row">
                    <div class="col-sm-9 h1 p-3 mb-2 bg-success text-white">
                            ${movie.title}
                            </div>
                        
                        <div class="col-4 col-sm-6">
                            Release Date:-  ${movie.release_date} <br>
                            Language:- ${movie.original_language}
                        
                        </div>
                        
                        <div class="col-4 col-sm-6">
                        <h4> overview </h4>
                            ${movie.overview}
                        </div> 
                        <div class="col-4 col-sm-6">
                         <div style="margine-left:420px;" class="photo" id="photo"><img src="https://image.tmdb.org/t/p/w185/${movie.poster_path}"
                        </div> 
                        
                        
                     </div>
                </div>
                `;

                    $("#results").append(collection);
                })


            });
    });
});