function getHex() {
    let num_16=Math.ceil(Math.random()*15);
   switch(num_16) {
        case 10:
            num_16='a';
             break;
         case 11:
             num_16='b';
             break;
         case 12:
             num_16='c';
             break;
         case 13:
             num_16='d';
             break;
         case 14:
             num_16='e';
             break;
         case 15:
             num_16='f'
             break;
   }
   return num_16 + '';
}
 function getHexColor() {
  return '#'+ getHex() + getHex()+ getHex()+ getHex()+ getHex()+ getHex();
}