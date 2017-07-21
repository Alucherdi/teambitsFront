export class Utils {

    objToBody =  function(obj) {
    var keys = Object.keys(obj)
    var body = ""
    for (var i = 0; i < keys.length; i ++){
      body += keys[i] + "=" + obj[keys[i]] + "&"
    }
    return body.substr(0, body.length - 1)
  };

}