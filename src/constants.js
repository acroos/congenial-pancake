const Constants = {
    InitialHeight: 30,
    StepHeight: 10,
    GameOverHeight: 780,
    Difficulties: [
        {
            name: "Too Easy",
            initialInterval: 1000,
            buttonClass: "is-light",
            value: 0
        },
        {
            name: "Easy",
            initialInterval: 800,
            buttonClass: "is-success",
            value: 1
        },
        {
            name: "Medium",
            initialInterval: 600,
            buttonClass: "is-warning",
            value: 2
        },
        {
            name: "Hard",
            initialInterval: 400,
            buttonClass: "is-danger",
            value: 3
        },
        {
            name: "Too Hard",
            initialInterval: 200,
            buttonClass: "is-dark",
            value: 4
        }
    ],
    MinInterval: 20,
    MaxNameLength: 50,
    LetterSpacing: 45.5
};

export default Constants;