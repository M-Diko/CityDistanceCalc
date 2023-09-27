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
                    alert('영어가 선택됨');
                    window.location.href = engPageURL;
                    languageSelect.textContent = "한국인";
                    break;
                case 'ko':
                    alert('한국어 선택');
                    window.location.href = korPageURL;
                    languageSelect.textContent = "한국인";
                    break;
                case 'xh':
                    alert('IsiXhosa가 선택됨');
                    window.location.href = xhoPageURL;
                    languageSelect.textContent = "한국인";
                    break;
                default:
                    alert('언어가 인식되지 않습니다');
            }
});




submitButton.addEventListener('click', () => {
            const value1 = city1.value;
            const value2 = city2.value;

            if (value1 && value2) {

                const distanceContent = `
                  <p>{${value1}} 와 {${value2}} 사이의 거리는  {} 입니다. </p>
                `;

                const city1Content = `
                  <p> - 도시  : {${value1}}</p>
                  <p> - 인구  : {}</p>
                  <p> - 국가  : {}</p>
                  <p> - 수도  : {}</p>
                  <p> - 경도  : {}</p>
                  <p> - 위도  : {}</p>
                `;

                const city2Content = `
                    <p> - 도시 : {${value2}}</p>
                    <p> - 인구 : {}</p>
                    <p> - 국가 : {}</p>
                    <p> - 수도 : {}</p>
                    <p> - 경도 : {}</p>
                    <p> - 위도 : {}</p>
                `;

                distance.innerHTML = distanceContent;
                city1details.innerHTML = city1Content;
                city2details.innerHTML = city2Content;   

            } else {
                alert('두 입력 필드를 모두 채워야 합니다.');
            }

});