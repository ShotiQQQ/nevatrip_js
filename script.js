function createForm() {
    const app = document.querySelector('#app');
    const form = document.createElement('form');
    const route = document.createElement('select');
    const timing = document.createElement('select');
    const labelForRoute = document.createElement('label');
    const labelForTime = document.createElement('label');
    const labelForNum = document.createElement('label');
    const buttonCount = document.createElement('button');
    const num = document.createElement('input');
    const calcBlock = document.createElement('div');
    const routeOptions = [
        document.createElement('option'),
        document.createElement('option'),
        document.createElement('option')
    ];
    const timeOptions = [
        document.createElement('option'),
        document.createElement('option'),
        document.createElement('option'),
        document.createElement('option'),
        document.createElement('option'),
        document.createElement('option'),
        document.createElement('option'),
        document.createElement('option'),
        document.createElement('option'),
        document.createElement('option'),
        document.createElement('option'),
        document.createElement('option'),
        document.createElement('option'),
    ];
    const backTiming = document.createElement('select');
    const labelForBack = document.createElement('label');
    const optionsBack = [
        document.createElement('option'),
        document.createElement('option'),
        document.createElement('option'),
        document.createElement('option'),
        document.createElement('option'),
        document.createElement('option'),
        document.createElement('option'),
    ];


    labelForRoute.textContent = 'Выберите путь';
    labelForTime.textContent = 'Выберите время отправления';
    labelForNum.textContent = 'Количество билетов'

    buttonCount.textContent = 'Посчитать';

    route.id = 'route';
    route.name = 'route';
    timing.name = 'timing';
    timing.id = 'timing';

    num.name = 'num';
    num.id = 'num';
    num.type = 'number';
    num.min = '1';

    calcBlock.classList.add('calc');

    routeOptions[0].value = 'из A в B';
    routeOptions[1].value = 'из B в A';
    routeOptions[2].value = 'из A в B и обратно в A';
    
    routeOptions[0].textContent = routeOptions[0].value;
    routeOptions[1].textContent = routeOptions[1].value;
    routeOptions[2].textContent = routeOptions[2].value;

    let time = [
        new Date('2021-08-21T18:00+03:00'),
        new Date('2021-08-21T18:30+03:00'),
        new Date('2021-08-21T18:45+03:00'),
        new Date('2021-08-21T19:00+03:00'),
        new Date('2021-08-21T19:15+03:00'),
        new Date('2021-08-21T21:00+03:00'),
        new Date('2021-08-21T18:30+03:00'),
        new Date('2021-08-21T18:45+03:00'),
        new Date('2021-08-21T19:00+03:00'),
        new Date('2021-08-21T19:15+03:00'),
        new Date('2021-08-21T19:35+03:00'),
        new Date('2021-08-21T21:50+03:00'),
        new Date('2021-08-21T21:55+03:00'),
    ]
    
    timeOptions[0].value = '18:00(из A в B)';
    timeOptions[1].value = '18:30(из A в B)';
    timeOptions[2].value = '18:45(из A в B)';
    timeOptions[3].value = '19:00(из A в B)';
    timeOptions[4].value = '19:15(из A в B)';
    timeOptions[5].value = '21:00(из A в B)';
    timeOptions[6].value = '18:30(из B в A)';
    timeOptions[7].value = '18:45(из B в A)';
    timeOptions[8].value = '19:00(из B в A)';
    timeOptions[9].value = '19:15(из B в A)';
    timeOptions[10].value = '19:35(из B в A)';
    timeOptions[11].value = '21:50(из B в A)';
    timeOptions[12].value = '21:55(из B в A)';

    timeOptions[0].textContent = `${time[0].toLocaleTimeString().slice(0, -3) + timeOptions[0].value.substring(5)}`;
    timeOptions[1].textContent = `${time[1].toLocaleTimeString().slice(0, -3) + timeOptions[1].value.substring(5)}`;
    timeOptions[2].textContent = `${time[2].toLocaleTimeString().slice(0, -3) + timeOptions[2].value.substring(5)}`;
    timeOptions[3].textContent = `${time[3].toLocaleTimeString().slice(0, -3) + timeOptions[3].value.substring(5)}`;
    timeOptions[4].textContent = `${time[4].toLocaleTimeString().slice(0, -3) + timeOptions[4].value.substring(5)}`;
    timeOptions[5].textContent = `${time[5].toLocaleTimeString().slice(0, -3) + timeOptions[5].value.substring(5)}`;
    timeOptions[6].textContent = `${time[6].toLocaleTimeString().slice(0, -3) + timeOptions[6].value.substring(5)}`;
    timeOptions[7].textContent = `${time[7].toLocaleTimeString().slice(0, -3) + timeOptions[7].value.substring(5)}`;
    timeOptions[8].textContent = `${time[8].toLocaleTimeString().slice(0, -3) + timeOptions[8].value.substring(5)}`;
    timeOptions[9].textContent = `${time[9].toLocaleTimeString().slice(0, -3) + timeOptions[9].value.substring(5)}`;
    timeOptions[10].textContent = `${time[10].toLocaleTimeString().slice(0, -3) + timeOptions[10].value.substring(5)}`;
    timeOptions[11].textContent = `${time[11].toLocaleTimeString().slice(0, -3) + timeOptions[11].value.substring(5)}`;
    timeOptions[12].textContent = `${time[12].toLocaleTimeString().slice(0, -3) + timeOptions[12].value.substring(5)}`;
    
    route.addEventListener('change', () => {
        if (route.value === 'из A в B и обратно в A') {
            backTiming.id = 'back';

            labelForBack.textContent='Выберите обратный рейс';

            optionsBack[0].value = '18:30(из B в A)';
            optionsBack[1].value = '18:45(из B в A)';
            optionsBack[2].value = '19:00(из B в A)';
            optionsBack[3].value = '19:15(из B в A)';
            optionsBack[4].value = '19:35(из B в A)';
            optionsBack[5].value = '21:50(из B в A)';
            optionsBack[6].value = '21:55(из B в A)';

            optionsBack[0].textContent = `${time[6].toLocaleTimeString().slice(0, -3) + optionsBack[0].value.substring(5)}`;
            optionsBack[1].textContent = `${time[7].toLocaleTimeString().slice(0, -3) + optionsBack[1].value.substring(5)}`;
            optionsBack[2].textContent = `${time[8].toLocaleTimeString().slice(0, -3) + optionsBack[2].value.substring(5)}`;
            optionsBack[3].textContent = `${time[9].toLocaleTimeString().slice(0, -3) + optionsBack[3].value.substring(5)}`;
            optionsBack[4].textContent = `${time[10].toLocaleTimeString().slice(0, -3) + optionsBack[4].value.substring(5)}`;
            optionsBack[5].textContent = `${time[11].toLocaleTimeString().slice(0, -3) + optionsBack[5].value.substring(5)}`;
            optionsBack[6].textContent = `${time[12].toLocaleTimeString().slice(0, -3) + optionsBack[6].value.substring(5)}`;

            timing.innerHTML = '';

            for (let i = 0; i < 6; i++) {
                timing.append(timeOptions[i]);
            }

            for (option of optionsBack) {
                backTiming.append(option);
            }
            timing.after(labelForBack, backTiming);
        } else if (route.value === 'из A в B'){
            labelForBack.remove();
            backTiming.remove();
            timing.innerHTML = '';
            for (let i = 0; i < 6; i++) {
                timing.append(timeOptions[i]);
            }
        } else if (route.value === 'из B в A') {
            labelForBack.remove();
            backTiming.remove();
            timing.innerHTML = '';
            for (let i = 6; i < 12; i++) {
                timing.append(timeOptions[i]);
            }
        }
    })

    for (option of routeOptions) {
        route.append(option);
    }
    for (let i = 0; i < 6; i++) {
        timing.append(timeOptions[i]);
    }
    form.append(labelForRoute, route, labelForTime, timing, labelForNum, num, buttonCount, calcBlock);
    app.append(form);
    
    return {
        app,
        form,
        route,
        timing,
        routeOptions,
        buttonCount,
        num,
        calcBlock,
        time,
        backTiming
    }
}

function count() {
    form.buttonCount.addEventListener('click', (e) => {
        e.preventDefault();
        let amountTickets = null;
        let time = null;
        let price = null;
        let route = null;
        let routeTime = null;
        const spanAmountTickets = document.createElement('span');
        const spanTiming = document.createElement('span');
        const departureAndComing = document.createElement('span');

        form.calcBlock.innerHTML = '';

        amountTickets = form.num.value;
        route = form.route.value;

        time = timing.selectedOptions[0].innerText.substring(0, 5);

        let d1 = new Date(`2021-08-21T${time}`);

        if (form.route.value === 'из A в B' || form.route.value === 'из B в A') {
            price = 700;
            routeTime = 50;
            d1.setMinutes(d1.getMinutes() + 50);
        } else if (form.route.value === 'из A в B и обратно в A') {
            price = 1200;
            routeTime = 100;
            d1.setMinutes(d1.getMinutes() + 100);
        }

        let d2 = d1.getHours()+":"+d1.getMinutes();

        if (form.route.value === 'из A в B и обратно в A') {
            if (d2.length === 4) {
                d2 = `0`+ `${d2}`;
            }
            let time2 = form.backTiming.selectedOptions[0].innerText.substring(0, 5);
            let test = new Date(`2021-08-21T${d2}`);
            let test2 = new Date(`2021-08-21T${time2}`)
            console.log(test, test2)
            if (test2.getTime() < test.getTime()) {
                alert('Вы должны выбрать время обратного билета позже, чем доберётесь до точки B')
                return
            }
        }

        if (!form.num.value) {
            alert('Введите количество билетов');
            return
        }

        spanAmountTickets.textContent = `Вы выбрали ${amountTickets} билета по маршруту ${route} стоимостью ${price * amountTickets} рублей`;
        spanTiming.textContent = `Это путешествие займет у Вас ${routeTime} минут`;
        departureAndComing.textContent = `Теплоход отправляется в ${time}, а прибудет в ${d2}`;

        form.calcBlock.append(spanAmountTickets, spanTiming, departureAndComing);
        form.form.append(form.calcBlock);
    })
}

const form = createForm();
count();