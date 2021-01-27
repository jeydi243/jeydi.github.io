ScrollOut({
    onShown: function (el) {
        anime({
            targets: el,
            easing: 'linear',
            duration: 4000,
            opacity: [0, 1],
        })
    },
    onHidden: function (el) {
        anime({
            targets: el,
            opacity: [1, 0],
            duration: 4000,
            easing: 'linear',
        })
    },
})
