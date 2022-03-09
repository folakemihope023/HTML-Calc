let input = document.getElementById('input');

let key = Array.from (document.getElementsByClassName('key'));

key.map( key => {
    key.addEventListener('click', (e) => {
        
        switch(e.target.innerText){
            case 'C':
                input.innerText = '';
                break;
                case '=':
                    try{
                        input.innerText = eval(input.innerText);
                    } catch{
                        input.innerText = 'Error';
                    }

                    break;
            default:
                input.innerText += e.target.innerText;
        }
    });
});