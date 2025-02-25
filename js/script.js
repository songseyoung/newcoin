(function () {

    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {}
    });


    var tween1 = TweenMax.to('#animate1', 0.3, {
    });
    var tween2 = TweenMax.to('#animate2', 0.3, {
    });
    var tween3 = TweenMax.to('#animate3', 0.3, {
    });


    var scene1 = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        duration: 900,
        offset: 0
    })
        .setClassToggle('.info1', 'active')
        .setTween(tween1)
        .addTo(controller)


    var scene2 = new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        duration: 600,
        offset: 0
    })
        .setClassToggle('.info2', 'active')
        .setTween(tween2)
        .addTo(controller)


    var scene3 = new ScrollMagic.Scene({
        triggerElement: "#trigger3",
        duration: 700,
        offset: 0
    })
        .setClassToggle('.info3', 'active')
        .setTween(tween3)
        .addTo(controller)

}())


setTimeout(() => {
    let coin1 = document.getElementById('img_coin_01')
    let coin2 = document.getElementById('img_coin_02')

    coin1.classList.add('hidden')
    coin2.classList.remove('hidden')
}, 900)