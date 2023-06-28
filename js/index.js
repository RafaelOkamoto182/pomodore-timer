import Timer from "./timer.js"
import Controls from "./controls.js"
import { Sound } from "./sound.js"
import {
    btnPlay,
    btnPause,
    btnStop,
    btnSet,
    btnSoundOff,
    btnSoundOn,
    minutesToDisplay,
    secondsToDisplay
} from "./htmlElements.js"


//factory: uma funcao que retorna um objeto. Voce chama uma funcao e ela te retorna um objeto com metodos etc
const controls = Controls({
    btnPause,
    btnPlay,
    btnSet,
    btnStop
})

const timer = Timer({
    minutesToDisplay,
    secondsToDisplay,
    resetControls: controls.reset,
})

const sound = Sound()

btnPlay.addEventListener('click', handleBtnPlayClick)
btnPause.addEventListener('click', handleBtnPauseClick)
btnStop.addEventListener('click', handlebBtnStopClick)
btnSoundOn.addEventListener('click', handlebBtnSoundOnClick)
btnSoundOff.addEventListener('click', handlebBtnSoundOffClick)
btnSet.addEventListener('click', handleBtnSetClick)


function handleBtnPlayClick() {
    controls.play()
    timer.countDown()
    sound.buttonPress()
}

function handleBtnPauseClick() {
    controls.pause()
    timer.hold()
    sound.buttonPress()

}

function handlebBtnStopClick() {
    controls.reset()
    timer.reset()
    sound.buttonPress()
}

function handlebBtnSoundOnClick() {
    btnSoundOn.classList.add('hide')
    btnSoundOff.classList.remove('hide')
    sound.bgAudio.pause()
}

function handlebBtnSoundOffClick() {
    btnSoundOff.classList.add('hide')
    btnSoundOn.classList.remove('hide')
    sound.bgAudio.play()
}

function handleBtnSetClick() {
    let minutesInput = controls.getMinutes()

    if (!minutesInput) {
        timer.reset()
        return
    }

    timer.updateTimerDisplay(minutesInput, 0)
    timer.updateMinutes(minutesInput)

}
