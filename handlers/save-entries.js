function saveHandler(){
     // read user input
     debugger;
     
    const inputElement = document.getElementById('input').value;
    if((entries.numbery.indexOf(inputElement) !== -1)|| (entries.nany.indexOf(inputElement) !== -1)){
       alert("input exist please input new element");
    }
    else if(isNaN(inputElement)){
        entries.nany.push(inputElement);  
        const nanyElement = document.getElementById('nany');
        const newEntry = document.createElement('li');
        newEntry.appendChild(document.createTextNode(inputElement));
        nanyElement.appendChild(newEntry);
        document.getElementById('nany').appendChild(nanyElement).innerHTML = entries.nany;

       
    }else{
      
       entries.numbery.push(inputElement);
       const numbaryElement = document.getElementById('number');
       const newNumberEntry = document.createElement('li');
       newNumberEntry.appendChild(document.createTextNode(inputElement));
       numbaryElement.appendChild(newNumberEntry);
       document.getElementById('number').appendChild(numbaryElement).innerHTML = entries.numbery;
    }

    document.getElementById('input').value = "";


    log.push({
      handler: 'saveHandler',
      entries: JSON.parse(JSON.stringify(entries))
    });
}