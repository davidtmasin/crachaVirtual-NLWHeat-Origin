//variável global
const linksSocialMedia = {
  github: 'davidtmasin',
  youtube: 'tiodavideducação',
  facebook: 'dteixeira.92',
  instagram: 'dteixeira.92',
  twitter: 'davidtmasin'
}
changeSocialMediaLinks()

function changeSocialMediaLinks() {
  // document.getElementById('userName').textContent = 'Xablau'
  // userName.textContent = 'Jubileu'
  for (let tagLi of socialLinks.children) {
    //variável de escopo, quando o escopo acaba, a variável deixa de existir
    const social = tagLi.getAttribute('class')
    //alert(tagLi.children[0].href)
    tagLi.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    //linkGithub.href = `https://github.com/${linksSocialMedia[social]}`
  }
}

const apiGithub = {
  avatar_url: 'https://avatars.githubusercontent.com/u/81026193?v=4',
  html_url: 'https://github.com/davidtmasin',
  name: 'David Teixeira de Masin',
  company: 'Techway Informática LTDA',
  blog: 'https://linktr.ee/davidtmasin',
  bio: "I'm programming student and I'm Software Tester."
}

getGitHubProfileInfos()

function getGitHubProfileInfos() {
  //Template String -> Usa texto com variável
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  //O fetch pega a resposta daquilo que ele recebeu como parÂmetro e guarda
  //O fetch não sabe o que vem da URL que no caso é um JSON, daí ele pega tudo transforma em um objeto

  fetch(url)
    /*
      - Usando uma Promisse -> Vai pegar a resposta que o fetch guardou
      - Usando uma arrow function -> Forma contraída de uma function convencional
      - É uma função sem nome (anônima) que só utiliza o argumento que ela recebe para poder fazer a ação
      - Não executa da forma que uma function convencional que fazemos uma chamada
      - O nome do argumento pode ser qualquer um, a sua finalidade é receber o que vem do fetch
      - As chaves ficam opcionais pois, só há uma linha de código no corpo da arrow function
      - Posso criar quantos then() eu quiser, eles pegam a resposta do anterior
    */
    .then(response => response.json()) //converte o que fetch guardou em JSON
    .then(data => {
      const name = data.name
      const bio = data.bio
      const userLink = data.html_url
      const photo = data.avatar_url
      const login = data.login

      userName.textContent = name
      userBio.textContent = bio
      linkGithub.href = userLink
      userPhoto.src = photo
      userNameLogin.textContent = login
    })
}
