var settings = {
  url: 'https://openapi.etsy.com/v2/listings/active.js?api_key=ms5fv63wg29bu0m2vgfr4cgo&keywords=whiskey&includes=Images,Shop',
  type: 'GET',
  dataType: 'jsonp',
  success: function(data){
    console.log(data.results);
    console.log(data);
    var result = data.results;
    result.forEach(makePage);
    //make a box with var result

    //make li html element


  },
  error: function(error){
    console.log('Error from ajax: ' , error);
  }
};

body = $('body');

$.ajax(settings);


function makePage(item,i,arr){
  // $makePage = $('')
  var li =  $('<li class="items"></li>');
    var a = $('<a href=""></a>');
  		var img = $('<img src="'+ item.Images[0].url_75x75 +'"></img>');
  		var h4 = $('<h4 class="">'+ item.title +'</h4>');
      var h5 = $('<h5>' + item.seller + '</h5>');
  		var h3 = $('<h3 class="">' + item.price + '</h3>');
      a.append(img,h4,h3);
      li.append(a);
      body.append(li);

}
