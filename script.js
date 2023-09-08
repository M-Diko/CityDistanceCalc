const city1 = document.getElementById('input1');
const city2 = document.getElementById('input2');
const submitButton = document.getElementById('submitButton');
const distance = document.getElementById('distance');
const city1details = document.getElementById('city1');
const city2details = document.getElementById('city2');
const engPageURL = 'index.html';
const korPageURL = 'index2.html';            
const xhoPageURL = 'index3.html';

const fileInput = document.getElementById('cities.csv');




const languageSelect = document.getElementById('languageSelect');
        
        languageSelect.addEventListener('change', function() {
            const selectedLanguage = languageSelect.value;
            
            switch (selectedLanguage) {
                case 'en':
                    alert('English selected');
                    window.location.href = engPageURL;
                    languageSelect.textContent = "English";
                    break;
                case 'ko':
                    alert('Korean selected');
                    window.location.href = korPageURL;
                    languageSelect.textContent = "English";
                    break;
                case 'xh':
                    alert('IsiXhosa selected');
                    window.location.href = xhoPageURL;
                    languageSelect.textContent = "English";
                    break;
                default:
                    alert('Language not recognized');
            }
        });




        submitButton.addEventListener('click', () => {
            const value1 = city1.value.toLowerCase();
            const value2 = city2.value.toLowerCase();

            var City_01 = "";
            var Country_01 = "";
            var Capital_01 = "";
            var Pop_01 = "";
            var Long_01 = "";
            var Lat_01 = "";
            var City_02 = "";
            var Country_02 = "";
            var Capital_02 = "";
            var Pop_02 = "";
            var Long_02 = "";
            var Lat_02 = "";




            fetch('data.csv')
            .then(response => response.text())
            .then(data => {
                  const rows = data.split('\n'); // Split CSV into rows


                  rows.forEach(row => {
                    const columns = row.split(',');
                    const id1 = columns[0].trim().toLowerCase(); // Assuming the ID is in the first column
                          const City01 = columns[1].trim().toLowerCase(); // Assuming the value is in the second column
                          const Pop01 = columns[6].trim();
                          const Country01 = columns[4].trim();
                          const Capital01 = columns[5].trim();
                          const Long01 = columns[3].trim();
                          const Lat01 = columns[2].trim();
                          

                          if (City01 === value1) {
                              City01 = City_01;
                              Country01 = Country_01;
                              Capital01 = Capital_01;
                              Pop01 = Pop_01;
                              Long01 = Long_01;
                              Lat01 = Lat_01;
                                  
                                  return; // Exit the loop when the value is found
                          }
                });

                rows.forEach(row => {
                  const columns = row.split(',');
                  const id1 = columns[0].trim().toLowerCase(); // Assuming the ID is in the first column
                        const City01 = columns[1].trim().toLowerCase(); // Assuming the value is in the second column
                        const Pop01 = columns[6].trim();
                        const Country01 = columns[4].trim();
                        const Capital01 = columns[5].trim();
                        const Long01 = columns[3].trim();
                        const Lat01 = columns[2].trim();
                        

                        if (City02 === value2) {
                          City02 = City_02;
                          Country02 = Country_02;
                          Capital02 = Capital_02;
                          Pop02 = Pop_02;
                          Long02 = Long_02;
                          Lat02 = Lat_02;
                                
                                return; // Exit the loop when the value is found
                        }
              });

            })
            




            if (value1 && value2) {
              
                const distanceContent = `
                  <p>The distance between {${value1}} and {${value2}} is {}</p>
                `; 


                const city1Content = `
                  <p> - City       : {${City_01}}</p>
                  <p> - Population : {${Pop_01}}</p>
                  <p> - Country    : {${Country_01}}</p>
                  <p> - Capital    : {${Capital_01}}</p>
                  <p> - Longitude  : {${Long_01}}</p>
                  <p> - Latitude   : {${Lat_01}}</p>
                `;

                const city2Content = `
                  <p> - City       : {${City_02}}</p>
                  <p> - Population : {${Pop_02}}</p>
                  <p> - Country    : {${Country_02}}</p>
                  <p> - Capital    : {${Capital_02}}</p>
                  <p> - Longitude  : {${Long_02}}</p>
                  <p> - Latitude   : {${Lat_02}}</p>
                `;
  
                distance.innerHTML = distanceContent;
                city2details.innerHTML = city2Content;
                city1details.innerHTML = city1Content;
  
            } else {
                alert('Both input fields must be filled.');
            }



    });