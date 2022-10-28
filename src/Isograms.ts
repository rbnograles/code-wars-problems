function isIsogram(str){

  var hash = {};
   str = str.toLowerCase();
   for (var i = 0; i < str.length; i++) {
     if (hash[str[i]]) {
       return false;
     }
     hash[str[i]] = true;
   }
   return true;

}