export default function Controls({
    btnPause,
    btnPlay,
    btnSet,
    btnStop
}) {

    function play() {
        btnPlay.classList.add('hide')
        btnPause.classList.remove('hide')

        btnSet.classList.add('hide')
        btnStop.classList.remove('hide')
    }

    function pause() {
        btnPause.classList.add('hide')
        btnPlay.classList.remove('hide')
    }

    function reset() {
        btnPlay.classList.remove('hide')
        btnPause.classList.add('hide')
        btnSet.classList.remove('hide')
        btnStop.classList.add('hide')
    }

    function getMinutes() {
        let minutesInput = prompt("Quantos minutos?")

        if (!minutesInput) {
            return false
        }

        return minutesInput
    }

    return {
        reset,
        play,
        pause,
        getMinutes
    }

}


