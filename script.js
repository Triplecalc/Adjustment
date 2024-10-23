        // Получаем текущую дату
        const currentDate = new Date();

        // Форматируем день и месяц с ведущими нулями
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');

        // Форматируем дату в "дд.мм.гггг"
        const formattedDate = `${day}.${month}.${currentDate.getFullYear()}`;

        // Выводим дату на страницу
        document.getElementById("currentDate").textContent = `Текущая дата: ${formattedDate}`;

        function fnCopy1() {
            navigator.clipboard.writeText(`Не согласен с показаниями "Сети",  Сетевой участок Россети МР; Дата сети ${sDate.value}; То ${sT0.value} ; Т1 ${sT1.value} ; Т2 ${sT2.value} ; Т3 ${sT3.value} ; Дата кл ${cDate.value}; То ${cT0.value} ; Т1 ${cT1.value} ; Т2 ${cT2.value} ; Т3 ${cT3.value} ;`)
            alert("Скопировано. Можно вставлять в обращение.")
        }
        function fnCopy2() {
            navigator.clipboard.writeText(`Клиент ошибочно передал показания от ${fDate.value} на То ${fT0.value}; Т1 ${fT1.value} ; Т2 ${fT2.value} ; Т3 ${fT3.value} ; 
Корректировочные показания на ${tDate.value} То ${tT0.value} ; Т1 ${tT1.value} ; Т2 ${tT2.value} ; Т3 ${tT3.value} ;
Показания клиента на ${formattedDate} равны: То  ; Т1  ; Т2  ; Т3  ;`)
            alert("Скопировано. Можно вставлять в обращение.")
        }
        function fnCopy3() {    
            navigator.clipboard.writeText(`${f1Date.value} клиент ошибочно передал показания То-${f1T0.value} Т1-${f1T1.value}, Т2-${f1T2.value}, Т3-${f1T3.value}, данные показания необходимо удалить. Корректные показания на ${t1Date.value}, То-${t1T0.value}, Т1-${t1T1.value}, Т2-${t1T2.value}, Т3-${t1T3.value}`)
            alert("Скопировано. Можно вставлять в обращение.")
        }

function formatDate(input) {
        let value = input.value.replace(/\D/g, ''); // Удаляем все символы, кроме цифр
        if (value.length > 2) value = value.slice(0, 2) + '.' + value.slice(2); // Вставляем первую точку
        if (value.length > 5) value = value.slice(0, 5) + '.' + value.slice(5); // Вставляем вторую точку
        input.value = value;
    }

    function validateNumber(input) {
        input.value = input.value.replace(/\D/g, ''); // Удаляем все нецифровые символы
        if (input.value.length > 6) input.value = input.value.slice(0, 6); // Ограничиваем до 6 цифр
    }

    function copyData(dateId, tIds) {
        const dateValue = document.getElementById(dateId).value;
        const tValues = tIds.map(id => document.getElementById(id).value);

        if (!isValidDate(dateValue)) {
            alert("Введите корректную дату.");
            return;
        }

        if (tValues.every(value => value === '')) {
            alert("Введите хотя бы одно показание.");
            return;
        }

        // Все проверки пройдены, можно копировать данные
        alert("Все ок!");
        // Здесь можно скопировать данные в нужном формате
    }

    function isValidDate(dateString) {
        const regex = /^\d{2}\.\d{2}\.\d{4}$/;
        return regex.test(dateString);
    }
