/*constant with new references*/
const linksSocialMedia = {
  github: 'ryanoliver05',
  youtube: 'channel/UCCf95F9xsYhIBEIsDvqyMrw',
  instagram: 'ry4n_0l1ver',
  facebook: 'profile.php?id=100008452637163',
  twitter: 'RyanDeOSilva2'
}
//In this function, it has a FOR with next atributtes: id=socialLinks, children of UL, the LI
//const media pegando o atributo class da LI e substituindo-a, através da referencia.
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const media = li.getAttribute('class')
    li.children[0].href = `https://${media}.com/${linksSocialMedia[media]}`
  }
}

changeSocialMediaLinks()

function getGitInfoProfile() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userPhoto.src = data.avatar_url
    })
}

getGitInfoProfile()
//ARROW function
