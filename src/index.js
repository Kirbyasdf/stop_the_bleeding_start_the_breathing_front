document.addEventListener('DOMContentLoaded', () => {
  console.log(
    "%c Easy Day",
    "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)"
  );
  const dataURL = "http://localhost:3000/api/v1/people"
  let personsArr = []

  getWounds()

function getWounds(){
  fetch(dataURL)
    .then(response => response.json())
    .then(data => data.forEach(x => personsArr.push(x)))
    console.log(personsArr)
}

  document.querySelector("#start").addEventListener("click", e => {
  woundGen()
  })

  function woundGen(){
  person = personsArr[Math.floor(Math.random() * personsArr.length)]
  wound  = person.wounds[Math.floor(Math.random() * person.wounds.length)]
  woundPic =  wound.img_url

  switch(wound.location){
    case "left arm":
      injury = document.querySelector("#leftArm")
      buildWound(wound, injury)
      setWoundPic(woundPic)
      break;
    case "right arm":
      injury = document.querySelector("#rightArm")
      buildWound(wound, injury)
      setWoundPic(woundPic)
      break;
    case "left leg":
      injury = document.querySelector("#leftLeg")
      buildWound(wound, injury)
      setWoundPic(woundPic)
      break;
    case "right leg":
      injury = document.querySelector("#rightLeg")
      buildWound(wound, injury)
      setWoundPic(woundPic)
      break;
    case "body":
      injury = document.querySelector("#body")
      buildWound(wound, injury)
      setWoundPic(woundPic)
      break;
    case "head":
      injury = document.querySelector("#head")
      buildWound(wound, injury)
      setWoundPic(woundPic)
      break;
    }
  }

function setWoundPic(woundPic){
  document.querySelector("#backdrop").innerHTML = `
    <img src=${woundPic}> </img>
  `
}


function buildWound(wound, injury){
  injury.style.display = "block"
  // injury.innerHTML =`
  // <p> A ${wound.name} it is a </p>
  // <p> ${wound.description} </P>
  // `
}
































});
