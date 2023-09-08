const city1 = document.getElementById('input1');
const city2 = document.getElementById('input2');
const submitButton = document.getElementById('submitButton');
const distance = document.getElementById('distance');
const city1details = document.getElementById('city1');
const city2details = document.getElementById('city2');


let value3 = "to be calculated";

        submitButton.addEventListener('click', () => {
            const value1 = city1.value;
            const value2 = city2.value;

            if (value1 && value2) {

                const distanceContent = `
                  <p>The distance between {${value1}} and {${value2}} is {}</p>
                `;

                const city1Content = `
                  <p> - City       : {${value1}}</p>
                  <p> - Population : {}</p>
                  <p> - Country    : {}</p>
                  <p> - Capital    : {}</p>
                  <p> - Longitude  : {}</p>
                  <p> - Latitude   : {}</p>
                `;

                const city2Content = `
                  <p> - City       : {${value2}}</p>
                  <p> - Population : {}</p>
                  <p> - Country    : {}</p>
                  <p> - Capital    : {}</p>
                  <p> - Longitude  : {}</p>
                  <p> - Latitude   : {}</p>
                `;

                distance.innerHTML = distanceContent;
                city1details.innerHTML = city1Content;
                city2details.innerHTML = city2Content;   

            } else {
                alert('Both input fields must be filled.');
            }

        });