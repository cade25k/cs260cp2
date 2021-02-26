
function onClick(e) {
  e.preventDefault();
  let s1 = document.getElementById('selector1');
  let s2 = document.getElementById('selector2');
  let amount = document.getElementById('amount').value;
  let curr1 = s1.options[s1.selectedIndex].value;
  let curr2 = s2.options[s2.selectedIndex].value;

  let url = "https://v6.exchangerate-api.com/v6/f6d600bc9da6efec9dd915e2/pair/" + curr1 + "/" + curr2 + "/" + amount;

  fetch(url)
    .then(function(response) {

      if (response.status != 200) {
        return {
          text: "Error calling the Numbers API service: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) {
      let result = amount + " " + curr1 + " is " + json.conversion_result + " " + curr2 + ".";
      updateResult(result);
    });
}

function updateResult(result) {
  document.getElementById('result').textContent = result;
}

document.getElementById('enter').addEventListener('click', onClick);
