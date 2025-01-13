(function () {

    var controller = new ScrollMagic.Controller({ globalSceneOptions: { duration: 600 } });

    var tween1 = TweenMax.to('#animate1', 0.3, {
    });
    var tween2 = TweenMax.to('#animate2', 0.3, {
    });
    var tween3 = TweenMax.to('#animate3', 0.3, {
    });
    var tween4 = TweenMax.to('#animate4', 0.3, {
    });
    var tween5 = TweenMax.to('#animate5', 0.3, {
    });

    var scene1 = new ScrollMagic.Scene({
        triggerElement: "#trigger1"

    })
        .setClassToggle('.info1', 'active')
        .setTween(tween1)
        .addTo(controller)
        .addIndicators({
            name: "1"
        });


    var scene2 = new ScrollMagic.Scene({
        triggerElement: "#trigger2"
    })
        .setClassToggle('.info2', 'active')
        .setTween(tween2)
        .addTo(controller)
        .addIndicators({
            name: "2"
        });

    var scene3 = new ScrollMagic.Scene({
        triggerElement: "#trigger3"
    })
        .setClassToggle('.info3', 'active')
        .setTween(tween3)
        .addTo(controller)
        .addIndicators({
            name: "3"
        });
    var scene4 = new ScrollMagic.Scene({
        triggerElement: "#trigger4"
    })
        .setClassToggle('.info4', 'active')
        .setTween(tween4)
        .addTo(controller)
        .addIndicators({
            name: "4"
        });
    var scene5 = new ScrollMagic.Scene({
        triggerElement: "#trigger5"
    })
        .setClassToggle('.info5', 'active')
        .setTween(tween4)
        .addTo(controller)
        .addIndicators({
            name: "5"
        });

}())