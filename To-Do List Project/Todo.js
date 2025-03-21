let totalTasks = 0;
let completetask = 0;
function updateCounter() {
    let taskCounter = document.getElementById("text3");  // "0/0" wale text ko select karo
       if (taskCounter) {
          taskCounter.innerText = `${completetask}/${totalTasks}`;
        } else {
             console.error("Error: 'text3' element not found!");
        }  
        updateProgress();   
        
        if(totalTasks===completetask) {
            cherish();
        }
}
function myfunction() {
    let input = document.getElementById("input").value.trim();
    let list1 = document.getElementById("list1");

    if(input !== "") {
        totalTasks++;
        updateCounter();
        let newdiv = document.createElement("div");
        newdiv.classList.add("same-div");
        // newdiv.innerText = input;

        let span = document.createElement("span");
        span.classList.add("span");
        span.innerText = input;

        let newimg = document.createElement("img");
        newimg.classList.add("task-comp");
        newimg.src = "TaskDone.png";
        
        let newimg1 = document.createElement("img");
        newimg1.classList.add("rewrite");
        newimg1.src = "rewritepng.png";

        let newimg2 = document.createElement("img");
        newimg2.classList.add("delete");
        newimg2.src = "trash.png";

        let newimg3 = document.createElement("img");
        newimg3.classList.add("done");
        newimg3.src = "checklist.png";

        newdiv.appendChild(newimg);
        newdiv.appendChild(newimg1);
        newdiv.appendChild(newimg2);
        newdiv.appendChild(span);

        // newdiv.append(newimg, newimg1, newimg2, input);
        list1.appendChild(newdiv);

        console.log(newdiv);

        document.getElementById("input").value = "";

        newimg.addEventListener("click", function() {
            if (newimg.src.includes("checklist.png")) {  
                // ✅ Task already completed, ab wapas incomplete karo
                newimg.src = "TaskDone.png";  // ❌ Change image back to incomplete
                span.style.color = "white";   // ❌ Text color wapas white
                completetask--;               // ❌ Completed task count kam karo
            } else {
                // ✅ Task complete karo
                newimg.src = "checklist.png"; // ✅ Change image to green tick
                span.style.color = "green";   // ✅ Text color green
                completetask++;               // ✅ Completed task count badhao
            }
            updateCounter();
         })


        newimg1.addEventListener("click", function() {
            let tasktext = newdiv.innerText;
            document.getElementById("input").value = tasktext;
            document.getElementById("input").focus();       // cursor input pe focous ho jata hai
            newdiv.remove();
            updateCounter();
        })

        newimg2.addEventListener("click", function() {
            newdiv.remove();
            totalTasks--;
            completetask--;
            updateCounter();
        })
    } else {
        alert("please enter some text!");
    }


}
function updateProgress() {
    let progressbar = document.getElementById("progress");

    let progpercentage = (completetask/totalTasks) * 100;
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