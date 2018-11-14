var app = angular.module("angularPracticeApp", []);
app.controller("CountriesController", ['$scope', function($scope){
  var countriesString = JSON.stringify([{"CountryName":"Somaliland","CapitalName":"Hargeisa","CapitalLatitude":"9.55","CapitalLongitude":"44.050000","CountryCode":"NULL","ContinentName":"Africa"},{"CountryName":"South Georgia and South Sandwich Islands","CapitalName":"King Edward Point","CapitalLatitude":"-54.283333","CapitalLongitude":"-36.500000","CountryCode":"GS","ContinentName":"Antarctica"},{"CountryName":"French Southern and Antarctic Lands","CapitalName":"Port-aux-FranÃ§ais","CapitalLatitude":"-49.35","CapitalLongitude":"70.216667","CountryCode":"TF","ContinentName":"Antarctica"},{"CountryName":"Palestine","CapitalName":"Jerusalem","CapitalLatitude":"31.766666666666666","CapitalLongitude":"35.233333","CountryCode":"PS","ContinentName":"Asia"},{"CountryName":"Aland Islands","CapitalName":"Mariehamn","CapitalLatitude":"60.116667","CapitalLongitude":"19.900000","CountryCode":"AX","ContinentName":"Europe"},{"CountryName":"Nauru","CapitalName":"Yaren","CapitalLatitude":"-0.5477","CapitalLongitude":"166.920867","CountryCode":"NR","ContinentName":"Australia"},{"CountryName":"Saint Martin","CapitalName":"Marigot","CapitalLatitude":"18.0731","CapitalLongitude":"-63.082200","CountryCode":"MF","ContinentName":"North America"},{"CountryName":"Tokelau","CapitalName":"Atafu","CapitalLatitude":"-9.166667","CapitalLongitude":"-171.833333","CountryCode":"TK","ContinentName":"Australia"},{"CountryName":"Western Sahara","CapitalName":"El-AaiÃºn","CapitalLatitude":"27.153611","CapitalLongitude":"-13.203333","CountryCode":"EH","ContinentName":"Africa"},{"CountryName":"Afghanistan","CapitalName":"Kabul","CapitalLatitude":"34.516666666666666","CapitalLongitude":"69.183333","CountryCode":"AF","ContinentName":"Asia"},{"CountryName":"Albania","CapitalName":"Tirana","CapitalLatitude":"41.31666666666667","CapitalLongitude":"19.816667","CountryCode":"AL","ContinentName":"Europe"},{"CountryName":"Algeria","CapitalName":"Algiers","CapitalLatitude":"36.75","CapitalLongitude":"3.050000","CountryCode":"DZ","ContinentName":"Africa"},{"CountryName":"American Samoa","CapitalName":"Pago Pago","CapitalLatitude":"-14.266666666666667","CapitalLongitude":"-170.700000","CountryCode":"AS","ContinentName":"Australia"},{"CountryName":"Andorra","CapitalName":"Andorra la Vella","CapitalLatitude":"42.5","CapitalLongitude":"1.516667","CountryCode":"AD","ContinentName":"Europe"},{"CountryName":"Angola","CapitalName":"Luanda","CapitalLatitude":"-8.833333333333334","CapitalLongitude":"13.216667","CountryCode":"AO","ContinentName":"Africa"},{"CountryName":"Anguilla","CapitalName":"The Valley","CapitalLatitude":"18.216666666666665","CapitalLongitude":"-63.050000","CountryCode":"AI","ContinentName":"North America"},{"CountryName":"Antigua and Barbuda","CapitalName":"Saint John's","CapitalLatitude":"17.116666666666667","CapitalLongitude":"-61.850000","CountryCode":"AG","ContinentName":"North America"},{"CountryName":"Argentina","CapitalName":"Buenos Aires","CapitalLatitude":"-34.583333333333336","CapitalLongitude":"-58.666667","CountryCode":"AR","ContinentName":"South America"},{"CountryName":"Armenia","CapitalName":"Yerevan","CapitalLatitude":"40.166666666666664","CapitalLongitude":"44.500000","CountryCode":"AM","ContinentName":"Europe"},{"CountryName":"Aruba","CapitalName":"Oranjestad","CapitalLatitude":"12.516666666666667","CapitalLongitude":"-70.033333","CountryCode":"AW","ContinentName":"North America"},{"CountryName":"Australia","CapitalName":"Canberra","CapitalLatitude":"-35.266666666666666","CapitalLongitude":"149.133333","CountryCode":"AU","ContinentName":"Australia"}]);

  $scope.countries = JSON.parse(countriesString);
}]);

window.onload = function(){
  //document.getElementById('date').innerHTML = moment().format('MMM. DD, YYYY');
}

app.controller("DishCommentController", ["$scope", function($scope){

  $scope.comments = [
    {
      rating: 5,
      review: "Love it!",
      name: "Carl C",
      date: "Oct. 16, 2012"
    },
    {
      rating: 1,
      review: "Hate it!",
      name: "Mad D",
      date: "Dec. 02, 2011"
    }
  ];

  $scope.cForm = {
    rating: 5
  }

  $scope.postComment = function(){
    $scope.cForm.date = moment().format('MMM. DD, YYYY');
    $scope.comments.push($scope.cForm);
    $scope.cForm = {rating: 5};
    $scope.userForm.$setPristine();
  }



}]);
