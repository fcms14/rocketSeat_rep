export async function search(value) {
    try {
        const endpoint = `https://api.github.com/users/${value}`;
        const fav = await fetch(endpoint)
            .then(data => data.json())
            .then(
                (
                    { login, name, public_repos, followers }
                ) => (
                    { login, name, public_repos, followers }
                )
            )
        if (fav.login === undefined) {
            throw new Error('Usuário não encontrado!');
        }
        else {
            return fav;
        }
    }
    catch (error) {
        alert(error.message)
    }
}