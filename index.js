const advice = document.getElementById("advice");
const adviceId = document.getElementById("id");
const btn = document.getElementById("button");

async function generate() {
    const apiData = await fetch("https://api.adviceslip.com/advice")
        .then((data) => {
            return data.json();
        })

        .then((data) => {
            advice.innerHTML = `"${data.slip.advice}"`;
            adviceId.innerHTML = `#${data.slip.id}`;
        });
}

btn.onclick = () => {
    generate();
    animate();
};

function animate() {
    anime({
        targets: "#advice",
        scale: [0, 1],
        opacity: {
            value: [0, 1],
            duration: 1000,
        },
        translateY: {
            value: [-100, 0],
            duration: 500,
        },
        duration: 200,
        easing: "easeInOutQuart",
    });

    anime({
        targets: ".main",
        opacity: {
            value: [0, 1],
            duration: 300,
        },
        duration: 200,
        easing: "easeInOutQuart",
    });
}
