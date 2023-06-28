import { Sound } from "./sound.js"

export default function Timer({
    minutesToDisplay,
    secondsToDisplay,
    resetControls,
}) {

    let timerTimeOut
    let minutes = Number(minutesToDisplay.textContent)

    function reset() {
        clearTimeout(timerTimeOut)
        updateTimerDisplay(minutes, 0)
    }

    function updateTimerDisplay(minutes, seconds) {
        minutesToDisplay.textContent = String(minutes).padStart(2, "0")
        secondsToDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function countDown() {
        timerTimeOut = setTimeout(() => {
            let seconds = Number(secondsToDisplay.textContent)
            let minutes = Number(minutesToDisplay.textContent)


            if (seconds <= 0) {
                if (minutes <= 0) {

                    resetControls()
                    reset()
                    Sound().timesUp()

                    return
                }

                seconds = 60
                minutes--
            }

            updateTimerDisplay(minutes, seconds - 1)

            countDown()
        }, 100)
    }

    function hold() {
        clearTimeout(timerTimeOut)
    }

    function updateMinutes(minutesInput) {
        minutes = minutesInput
    }

    return {
        countDown,
        reset,
        updateTimerDisplay,
        updateMinutes,
        hold
    }

}

export { Timer }
//o objeto no argumento da funcao é chamado de desestruturacao. Dessa forma, os parametros nao precisam ser passados na ordem exata que esta na funcao.

//short handler de objeto: quando o atributo tem o mesmo nome do campo, pode escrever só o nome que ele ja entende
//ex.: {countDown: countDown} é o mesmo que só colocar {countDown}