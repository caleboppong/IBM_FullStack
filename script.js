function addRecommendation() {
    let message = document.getElementById("new_recommendation").value;
  
    if (message.trim() === "") {
      alert("Please enter a recommendation.");
      return;
    }
  
    let newRec = document.createElement("div");
    newRec.className = "recommendation";
    newRec.innerHTML = `<span>&#8220;</span>${message}<span>&#8221;</span>`;
  
    document.getElementById("all_recommendations").appendChild(newRec);
    document.getElementById("new_recommendation").value = "";
  
    showPopup(true);
  }
  
  function showPopup(bool) {
    const popup = document.getElementById("popup");
    popup.style.visibility = bool ? "visible" : "hidden";
  }