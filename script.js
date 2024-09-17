function fnCopy1() {
            navigator.clipboard.writeText(`Не согласен с показаниями "Сети",  Сетевой участок Россети МР; Дата сети ${sDate.value}; То ${sT0.value} ; Т1 ${sT1.value} ; Т2 ${sT2.value} ; Т3 ${sT3.value} ; Дата кл ${cDate.value}; То ${cT0.value} ; Т1 ${cT1.value} ; Т2 ${cT2.value} ; Т3 ${cT3.value} ;`)
            alert("Скопировано. Можно вставлять в обращение.")
        }
        function fnCopy2() {
            navigator.clipboard.writeText(`Клиент ошибочно передал показания ${fDate.value} То ${fT0.value} Т1 ${fT1.value} ; Т2 ${fT2.value} ; Т3 ${fT3.value} ; Корректировочные показания на ${tDate.value} То ${tT0.value} ; Т1 ${tT1.value} ; Т2 ${tT2.value} ; Т3 ${tT3.value} ;`)
            alert("Скопировано. Можно вставлять в обращение.")
        }
        function fnCopy3() {
            navigator.clipboard.writeText(`${f1Date.value} клиент ошибочно передал показания То-${f1T0.value} Т1-${f1T1.value}, Т2-${f1T2.value}, Т3-${f1T3.value}, данные показания необходимо удалить. Корректные показания на ${t1Date.value}, То-${t1T0.value}, Т1-${t1T1.value}, Т2-${t1T2.value}, Т3-${t1T3.value}`)
            alert("Скопировано. Можно вставлять в обращение.")
        }

        //тест
        // Date input formatting function
    function formatInputDate(input) {
        input.addEventListener('input', function (e) {
            let value = input.value.replace(/\D/g, ''); // Remove all non-digit characters
            if (value.length >= 2) value = value.slice(0, 2) + '.' + value.slice(2);
            if (value.length >= 5) value = value.slice(0, 5) + '.' + value.slice(5);
            input.value = value;
        });
    }

    // Apply date formatting to each date input
    ['sDate', 'cDate'].forEach(id => {
        formatInputDate(document.getElementById(id));
    });

    // Numeric input validation
    $('.input-group input[type="text"]').on('input', function () {
        let id = $(this).attr('id');
        if (!id.includes('Date')) {
            // Only allow numbers in non-date fields
            $(this).val($(this).val().replace(/\D/g, '').slice(0, 6));
        }
    });

    // Copy function
    function fnCopy1() {
        let sDate = $('#sDate').val();
        let sT0 = $('#sT0').val();
        let sT1 = $('#sT1').val();
        let sT2 = $('#sT2').val();
        let sT3 = $('#sT3').val();
        let cDate = $('#cDate').val();
        let cT0 = $('#cT0').val();
        let cT1 = $('#cT1').val();
        let cT2 = $('#cT2').val();
        let cT3 = $('#cT3').val();

        // Check for empty fields
        if (!sDate || !sT0 || !sT1 || !sT2 || !sT3 || !cDate || !cT0 || !cT1 || !cT2 || !cT3) {
            alert('Данные заполнены не полностью, пропишите все данные.');
            return;
        }

        // Construct the text to copy
        let textToCopy = `^Не согласен с показаниями "Сети", Сетевой участок Россети МР; Дата сети ${sDate}; То ${sT0}; Т1 ${sT1}; Т2 ${sT2}; Т3 ${sT3}; Дата кл ${cDate}; То ${cT0}; Т1 ${cT1}; Т2 ${cT2}; Т3 ${cT3};^^`;

        // Copy to clipboard
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Готово, данные скопированы. Теперь вставь их в обращение клиента.');
        }).catch(() => {
            alert('Ошибка при копировании текста.');
        });
    }
