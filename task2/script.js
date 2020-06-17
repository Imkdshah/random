const cols = document.querySelectorAll(".column");
const lists = document.querySelectorAll('.lists')

let draggedItem = null;

for( let i= 0 ; i<cols.length ; i++){
    const item = cols[i];
    
    item.addEventListener('dragstart',function(e){
        console.log('dragstart',e);
        
        draggedItem=this;

    });

    item.addEventListener('dragend',function(){
        console.log('dragend');
        

        setTimeout(function(){
            draggedItem=null;
        
        },0);
        
    });

    for (let j=0; j<lists.length;j++){
        const list=lists[j];

        list.addEventListener('dragover',function(e){

                e.preventDefault();

        });
        list.addEventListener('dragenter',function(e){
            e.preventDefault();
        });

        list.addEventListener('drop',function(e){

                console.log('drop');
                lists[0].append(draggedItem);
                
        });
    }
}
