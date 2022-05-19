import { search } from "./api.js";
import { StorageFactory } from "./storageFactory.js";

let favsFuncs = StorageFactory.createStorage(storage.value);
write(await favsFuncs.load());

storage.addEventListener('change', async () => {
    const {value} = storage;
    favsFuncs = StorageFactory.createStorage(value);
    write(await favsFuncs.load());
})

function cleanInput() {
    document.getElementById("inputSearch").value = '';
}

export async function handle(e) {
    e.preventDefault();
    const value = document.getElementById("inputSearch").value.toLowerCase();    

    if (value) {
        try {
            if (favsFuncs.exists(value)) {
                const fav = await search(value);
                if (fav) {
                    const favs = await favsFuncs.add(fav);
                    write(favs);
                }
            }
            else {
                throw new Error('Usuário já cadastrado! @18')
            }
        }
        catch (error) {
            alert(error.message)
        }
        cleanInput();
    }
}

function write(favs) {

    const tbody = document.querySelector('table tbody')
    
    function cleanTable() {
        const tbody = document.querySelector('table tbody')
        tbody.querySelectorAll('tr').forEach((tr) => { tr.remove() })
    }    

    if (favs != 0) {
        cleanTable();

        favs.forEach(fav => {
            const tr = document.createElement('tr')

            tr.innerHTML = `
                <td>
                        <a href="https://github.com/${fav.login}" target="_blank">
                        <span>
                            <img src="https://github.com/${fav.login}.png" alt="Imagem de ${fav.name}">
                            <span>
                            ${fav.name}
                            <br>/${fav.login}
                            </span>
                        </span>
                        </a>
                                                      </td>
                <td> ${fav.public_repos}              </td>
                <td> ${fav.followers}                 </td>
                <td> <button value='${fav.login}'>Remover</button>         </td>
            `;

            tr.querySelector('button').onclick = (event) => {
                const favs = favsFuncs.remove(event.target.value)
                write(favs);
            };

            tbody.append(tr);

        })
    }
    else {
        cleanTable();
        const tr = document.createElement('tr');
        tr.innerHTML = `
                <td colspan="4" height="600">
                    <div class="empty">
                        <img src="assets/empty.svg" /> Nenhum favorito ainda
                    </div>
                </td>
        `
        tbody.append(tr);

    }
}