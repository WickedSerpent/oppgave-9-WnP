let clickedElement = null;
// let count=0;

/*Highlight: adderer og fjærner class i CSS kalt .aktiv. fungerer fordi clickedelement = null */
function klikk(element){
     if(clickedElement) {
      clickedElement.classList.remove('aktiv');   
     }
    
    element.classList.add('aktiv');
    // if(count === 0) {
    //     console.log('hei');
    //     count = 1;
    // } else if (count = 1) {
    //     console.log('bye');
    //     count = 0;
    // };
    clickedElement = element;
    // count=count+1
    // console.log(count);
}   /* "Element" er linket til this parameteret i checkboksene, som alltid, kan parametere egendefineres fritt med unntak av this og eventuelle andre perametere jeg ikke er kjent med enda*/
    /*ClassName blir erstatted med klassenavnet i css for eks .rødbackground i første sjekkboks */
function toggleStyle(element, className){
    let isChecked = element.checked;
    clickedElement.classList.toggle(className, isChecked);
}