;(function (params) {
    ScrollOut({
        onShown: function (el) {
            anime({
                targets: el,
                easing: 'linear',
                duration: 2000,
                opacity: [0, 1],
            })
        },
        onHidden: function (el) {
            anime({
                targets: el,
                opacity: [1, 0],
                duration: 2000,
                easing: 'linear',
            })
        },
    })
})()
