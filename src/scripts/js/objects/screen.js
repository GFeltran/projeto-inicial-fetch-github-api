const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        let repositoriesItens = '';
        let eventItens = '';

        this.userProfile.innerHTML =   `<div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto de perfil do usuário">

                                            <div class="data">
                                                <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                                                <p>${user.bio   ?? 'Não possui bio cadastrada 😥'}</p>
                                                <div class="follows">
                                                    <div class="followers">
                                                        <p>${user.followers}</p>
                                                        <p>seguidores</p>
                                                    </div>
                                                    <div class="following">
                                                        <p>${user.following}</p>
                                                        <p>seguindo</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`

        if(user.repositories.length > 0) {
            user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                        <a href="${repo.url}" target="_blank">${repo.name}
                                                                            <div class="repo-infos">
                                                                                <div class="info fork">
                                                                                    <i class="fas fa-code-branch"></i>
                                                                                    <p>${repo.fork}</p>
                                                                                </div>
                                                                                <div class="info star">
                                                                                    <i class="fas fa-star"></i>
                                                                                    <p>${repo.stars}</p>
                                                                                </div>
                                                                                <div class="info watcher">
                                                                                    <i class="fas fa-eye"></i>
                                                                                    <p>${repo.watchers}</p>
                                                                                </div>
                                                                                <div class="info language">
                                                                                    <i class="fas fa-code"></i>
                                                                                    <p>${repo.language}</p>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </li>`);

            this.userProfile.innerHTML +=  `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div> `
        }

        if(user.events.length > 0){
            user.events.forEach(event => eventItens += `<li>
                                                            <p class='repo-name'>${event.name}</p>
                                                            <p class='repo-commit'>-${event.commit ?? 'null'}</p>
                                                        </li>`)

            this.userProfile.innerHTML +=  `<div class="events section">
                                                <h2>Eventos</h2>
                                                <ul>${eventItens}</ul>
                                            </div> `
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = '<h3>Usuário não encontrado</h3>'
    }
}

export { screen }
