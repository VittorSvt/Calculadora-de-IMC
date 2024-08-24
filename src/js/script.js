const form = document.getElementById('form')

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const Weight = document.getElementById('Weight').value;
    const Height = document.getElementById('Height').value;

    const BMI = (Weight / (Height * Height)).toFixed(2);

    const value = document.getElementById('value');
    let description = ' ';

    document.getElementById('infos').classList.remove('hidden');


    if (BMI < 16.5) {
        description = "Tome cuidado! Voce está muito abaixo do peso"
        
        // value.classList.add('danger')   
        value.style.color = '#f00'
    }
    

    else if (BMI > 16.5 && BMI < 18.5) {
        description = "Tome cuidado! Voce está abaixo do peso"

        // value.classList.add('attenction')
        value.style.color = '#ff0'
    }

    else if (18.5 < BMI && BMI < 25) {
        description = "Ótimo, voce está no seu peso ideal"

        // value.classList.add('normal')
        value.style.color = '#0f0'
    }

    else if (BMI > 25 && BMI < 30) {
        description = "Tome cuidado! Voce está acima do peso"

        // value.classList.add('attenction')
        value.style.color = '#ff0'
    }

    else if (30 < BMI && BMI < 34) {
        description = "Tome bastante cuidado, voce pode possuir obesidade grau I"

        // value.classList.add('danger')
        value.style.color = '#f00'
    }

    else if (BMI <= 35 && BMI < 40) {
        description = "Tome bastante cuidado, voce pode possuir obesidade grau II"

        // value.classList.add('danger')
        value.style.color = '#f00'
    }

    else {
        description = "Tome bastante cuidado, voce pode possuir obesidade grau III"

        // value.classList.add('danger')
        value.style.color = '#f00'
    }

    value.textContent = BMI.replace(".",',');

    document.getElementById('description').textContent = description

})

