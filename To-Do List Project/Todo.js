let totalTasksCount = 0;
let completeTaskCount = 0;
function updateCounter() {
    let taskCounter = document.getElementById("counter");  // "0/0" wale text ko select karo
       if (taskCounter) {
          taskCounter.innerText = `${completeTaskCount}/${totalTasksCount}`;
        } else {
             console.error("Error: 'counter' element not found!");
        }  
        updateProgress();   
        
        if(totalTasksCount===completeTaskCount && totalTasksCount>0) {
            cherish();
        }
}
function myfunction() {
    let input = document.getElementById("input").value.trim();
    let list1 = document.getElementById("list1");

    if(input !== "") {
        totalTasksCount++;
        updateCounter();
        let notediv = document.createElement("div");
        notediv.classList.add("notediv");

        let span = document.createElement("span");
        span.classList.add("span");
        span.innerText = input;

        let incomplete_task_img = document.createElement("img");
        incomplete_task_img.classList.add("task-comp");
        incomplete_task_img.src = "TaskDone.png";
        
        let rewrite_img = document.createElement("img");
        rewrite_img.classList.add("rewrite");
        rewrite_img.src = "rewritepng.png";

        let delete_img = document.createElement("img");
        delete_img.classList.add("delete");
        delete_img.src = "trash.png";

        let task_comp_img = document.createElement("img");
        task_comp_img.classList.add("done");
        task_comp_img.src = "checklist.png";

        notediv.appendChild(incomplete_task_img);
        notediv.appendChild(rewrite_img);
        notediv.appendChild(delete_img);
        notediv.appendChild(span);

        list1.appendChild(notediv);

        document.getElementById("input").value = "";

        incomplete_task_img.addEventListener("click", function() {
            if (incomplete_task_img.src.includes("checklist.png")) {  
                // ✅ Task already completed
                incomplete_task_img.src = "TaskDone.png";  // ❌ Change image back to incomplete
                span.style.color = "white";   // ❌ Text color wapas white
                completeTaskCount--;               // ❌ Completed task count kam karo
            } else {
                // ✅ Task complete karo
                incomplete_task_img.src = "checklist.png"; // ✅ Change image to green tick
                span.style.color = "green";   // ✅ Text color green
                completeTaskCount++;               // ✅ Completed task count badhao
            }
            updateCounter();
         })


        rewrite_img.addEventListener("click", function() {
            let tasktext = notediv.innerText;
            document.getElementById("input").value = tasktext;
            document.getElementById("input").focus();       // cursor input pe focous ho jata hai
            notediv.remove();      
            totalTasksCount--;

            // if Task already completed  
            if (incomplete_task_img.src.includes("checklist.png")) {
                completeTaskCount--;
            }
            updateCounter();
        })

        delete_img.addEventListener("click", function() {
            notediv.remove();
            totalTasksCount--;
            if (completeTaskCount > 0) {  
                completeTaskCount--;               // ❌ Completed task count kam karo
            }
            updateCounter();
        })
    } else {
        alert("please enter some text!");
    }


}
function updateProgress() {
    let progressbar = document.getElementById("progress");

    let progpercentage = (completeTaskCount/totalTasksCount) * 100;
    progressbar.style.width = progpercentage + "%";
    progressbar.style.backgroundColor = "green";
}

function cherish() {
    const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
}