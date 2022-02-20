const mockResponse = [
  {
    id: 1,
    title: "Pulp Fiction: Tempo de Violência",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat lorem mollis lorem efficitur sodales. Nunc tristique, odio molestie pharetra vulputate, mauris turpis euismod odio, interdum dictum ipsum odio quis erat. Nunc et tortor id dolor faucibus condimentum at vel nibh. In tellus ipsum, sagittis ac dolor ut, fermentum eleifend nunc. Sed varius cursus scelerisque. Maecenas pulvinar, nibh id lacinia consequat, orci arcu blandit lacus, et finibus ante enim non turpis. Phasellus malesuada nisl eget luctus auctor. In hac habitasse platea dictumst." ,
    author: "Wesley Santos",
    rating: 3.0,
    releaseDecade: "1990",
    Nacionality: "Norte-Americano",
    Gender: ["Crime", "Drama"],
    Awards: ["Oscar", "Globo de Ouro", "Palma de Ouro"]
  }, 
  {
    id: 2,
    title: "Forest Gump - O contador de histórias",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat lorem mollis lorem efficitur sodales. Nunc tristique, odio molestie pharetra vulputate, mauris turpis euismod odio, interdum dictum ipsum odio quis erat. Nunc et tortor id dolor faucibus condimentum at vel nibh. In tellus ipsum, sagittis ac dolor ut, fermentum eleifend nunc. Sed varius cursus scelerisque. Maecenas pulvinar, nibh id lacinia consequat, orci arcu blandit lacus, et finibus ante enim non turpis. Phasellus malesuada nisl eget luctus auctor. In hac habitasse platea dictumst." ,
    author: "Juan Fernandes",
    rating: 4.0,
    releaseDecade: "1990",
    Nacionality: "Norte-Americano",
    Gender: ["Drama"],
    Awards: ["Oscar", "Globo de Ouro", "Palma de Ouro"]
  }  
] 

export default {
  get: jest.fn().mockResolveValue
}