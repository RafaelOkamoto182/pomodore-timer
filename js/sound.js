export function Sound() {

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

    bgAudio.loop = true

    function buttonPress() {
        buttonPressAudio.play()
    }

    function timesUp() {
        kitchenTimer.play()
    }

    //aqui é so pra mostrar as diferentes formas de se fazer, por isso retorno os dois primeiros como funcao e o ultimo como o proprio elemento de audio
    return {
        buttonPress,
        timesUp,
        bgAudio
    }


}