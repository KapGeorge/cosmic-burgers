const url = 'https://norma.nomoreparties.space';

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }

    return res.json()
        .then((err) => { throw new Error(err) })
    console.log('eee')
};

export function getIngredients() {
    return fetch(`${url}/api/ingredients`)
        .then(checkResponse)

};
