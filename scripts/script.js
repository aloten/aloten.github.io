const setDemoAlerts = () => {
  ["Terracotta", "Like Minds", "Rhino REST API", "InstaCapture"].forEach(title => {
    const projectNameEl = Array.from(document.querySelectorAll(".project-name")).find(el => el.textContent === title);
    const demoLink = projectNameEl.parentElement  .querySelectorAll("a[class='project-link'")[1];
    demoLink.addEventListener("click", () => {
      alert("Sorry! Heroku removed their free server tier and I haven't redeployed this app elsewhere.");
    })
  })
}

setDemoAlerts();