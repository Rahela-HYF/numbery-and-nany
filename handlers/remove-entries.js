function removeHandler(arry, elem){
    const inputElement = document.getElementById('input').value;
   /* if((entries.numbery.indexOf(inputElement) !== 1)|| (entries.nany.indexOf(inputElement) !== 1)){
       //alert("element tobe removed found");
       inputElement.removeChild(entries.numbery);
       entries.nany=reduce('inputElement');
    }else{
        return 1;
    }*/
    var index = entries.nany.indexOf(elem);
    if (index > -1){
        arry.entries.nany.splice(index, 1);
      //  entries.nany.pop(inputElement); 
    }
    
    document.getElementById('number').innerHTML = entries.numbery;
    document.getElementById('nany').innerHTML = entries.nany;
    document.getElementById('input').value ="";

    log.push({
        handler: 'removeHandler',
        entries: JSON.parse(JSON.stringify(entries))
      });
    
}