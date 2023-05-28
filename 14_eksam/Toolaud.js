const notificationBubble = document.getElementById("notif_bubble");
const notificationBtn = document.getElementById("notif_btn");
const notifs = document.getElementById("notifs");
notifs.hidden = true;

notificationBtn.addEventListener("click", () => {
    if(notifs.hidden == true){
      notifs.hidden = false;
    } else {
      notifs.hidden = true;
    }
    });