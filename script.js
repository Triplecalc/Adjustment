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
