var tasks = ['task-1', 'task-2', 'task-3', 'task-4', 'task-5'];

let text = "";
let time;

async function taskTimer(){
    for (let x of tasks) {
        text = x+' is completed';
        time =  Math.floor(Math.random()*10)
        // console.log(text +' '+ time)
        let promise = new Promise(function(resolve, reject){
            setTimeout(() => resolve(text),time*1000);            
        });

        let result = await promise;

        alert(result);
    }
    
}
taskTimer();

