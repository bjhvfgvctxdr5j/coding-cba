input.onButtonPressed(Button.A, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.B, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Prelude), music.PlaybackMode.InBackground)
})
music.setVolume(127)
basic.forever(function () {
    music.setVolume(music.volume())
})
