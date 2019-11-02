var path = "path/a-long/path/to-my/file.pdf";
var path_splitted = path.split('.');
var extension = path_splitted.pop();
var validacion ="pdf"
// Si la cadena dada no tiene extensión ...
if(extension == validacion){
 console.log(`la extencion es ${extension}`);
}else{
console.log(`la extension no es ${validacion}`);
}

