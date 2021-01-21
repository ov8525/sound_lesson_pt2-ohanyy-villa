while True:
    if input.light_level()> 25 or input.sound_level()> 50:
        music.set_volume(100)
        light.show_animation(light.rainbowAnimation, 1000)
        music.set_volume(20)
        music.play_melody("D D E D G F#", 120) 
        pause(500)
        music.play_melody("D D E D A G---", 120) 
        pause(250)
        music.play_melody("D D d B G F# E",120)
        pause(500)
        music.play_melody("c c B G A G",120)
        music.stop_all_sounds()