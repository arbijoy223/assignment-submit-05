
document.getElementById('discover-btn').addEventListener('click', function () {
    window.location.assign('blogs.html');
})


countTask()
function countTask() {
    let taskCounter = 0;
    const allTaskButtons = document.querySelectorAll('.task .task-btn');
    for (const btn of allTaskButtons) {
        if (btn.disabled === false) {
            taskCounter++;
        }
    }
    setInnerText('task-counter', taskCounter);
    return taskCounter;
}


getDate();
function getDate() {
    const time = new Date();
    const timeList = time.toString().split(" ");
    const day = timeList[0];
    const MonthDateYear = timeList[1] + " " + timeList[2] + " " + timeList[3];

    setInnerText('today', day);
    setInnerText('todayDate', MonthDateYear);
}

document.getElementById('rgb-btn').addEventListener('click', function () {
    setRGB();
})
function setRGB() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    document.querySelector('body').style.backgroundColor = 'rgba(' + r + ',' + g + ',' + b + ',' + 0.2 + ')';
}

function incrementDone() {
    const counter = parseInt(document.getElementById('increment-done').innerText);
    document.getElementById('increment-done').innerText = counter + 1;
}

function addHistory(title) {
    const time = new Date();
    const currentTime = time.toLocaleTimeString();
    const message = "You have Complete The Task " + title + " at " + currentTime;
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="bg-primary p-[10px] rounded-lg">
            <p class="text-black opacity-70">
             ${message}
        </p>
    </div>
    `;
    document.getElementById('history-container').appendChild(div);
}

document.getElementById('clear-history-btn').addEventListener('click',function(){
    document.getElementById('history-container').innerHTML = ''
})

const allTaskButtons = document.querySelectorAll('.task .task-btn')
for (const taskBtn of allTaskButtons) {
    taskBtn.addEventListener('click', function (event) {
        let taskDiv = event.target.closest('div');
        let counter = 10;
        while (!taskDiv.classList.contains('task') && counter--) {
            taskDiv = taskDiv.parentElement;
        }
        const id = taskDiv.id;
        const taskTitle = document.querySelector('#'+id+' .task-title').innerText;

        alert('Board Updated Successfully');
        event.target.disabled = true;
        incrementDone();
        addHistory(taskTitle);
        const remainedTask = countTask();
        if(!remainedTask){
            alert('congrats!!! You have completed all the current task');
        }
    })
}