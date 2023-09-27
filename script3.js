const city1 = document.getElementById('input1');
const city2 = document.getElementById('input2');
const submitButton = document.getElementById('submitButton');
const distance = document.getElementById('distance');
const city1details = document.getElementById('city1');
const city2details = document.getElementById('city2');
const engPageURL = 'index.html';
const korPageURL = 'index2.html';            
const xhoPageURL = 'index3.html';

const languageSelect = document.getElementById('languageSelect');
        
        languageSelect.addEventListener('change', function() {
            const selectedLanguage = languageSelect.value;
            
            switch (selectedLanguage) {
                case 'en':
                    alert('IsiNgesi esikhethiweyo');
                    window.location.href = engPageURL;
                    languageSelect.textContent = "IsiXhosa";
                    break;
                case 'ko':
                    alert('IsiKorea sikhethiwe');
                    window.location.href = korPageURL;
                    languageSelect.textContent = "IsiXhosa";
                    break;
                case 'xh':
                    alert('IsiXhosa sikhethiwe');
                    window.location.href = xhoPageURL;
                    languageSelect.textContent = "IsiXhosa";
                    break;
                default:
                    alert('Ulwimi alaziwa');
            }
});




submitButton.addEventListener('click', () => {
            const value1 = city1.value;
            const value2 = city2.value;

            if (value1 && value2) {

                const distanceContent = `
                  <p>Umgama phakathi {${value1}} kwaye {${value2}} yi {}</p>
                `;

                const city1Content = `
                  <p> - Isixeko  : {${value1}}</p>
                  <p> - Abemi    : {}</p>
                  <p> - Ilizwe   : {}</p>
                  <p> - Inkunzi  : {}</p>
                  <p> - Ubude    : {}</p>
                  <p> - Ububanzi : {}</p>
                `;

                const city2Content = `
                <p> - Isixeko  : {${value2}}</p>
                <p> - Abemi    : {}</p>
                <p> - Ilizwe   : {}</p>
                <p> - Inkunzi  : {}</p>
                <p> - Ubude    : {}</p>
                <p> - Ububanzi : {}</p>
                `;

                distance.innerHTML = distanceContent;
                city1details.innerHTML = city1Content;
                city2details.innerHTML = city2Content;   

            } else {
                alert('Zombini iindawo zegalelo kufuneka zizaliswe.');
            }

});