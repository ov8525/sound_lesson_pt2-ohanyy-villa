while (true) {
    if (input.lightLevel() > 25 || input.soundLevel() > 30) {
        music.setVolume(100)
        light.showAnimation(light.rainbowAnimation, 1000)
        music.playMelody("D D E D G F#", 120)
        pause(500)
        music.playMelody("D D E D A G---", 120)
        pause(250)
        music.playMelody("D D d B G F# E", 120)
        pause(500)
        music.playMelody("c c B G A G", 120)
        music.stopAllSounds()
        light.setAll(light.rgb(0, 0, 0))
    }
    
}
