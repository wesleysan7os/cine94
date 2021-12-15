import express from 'express';

const router = express.Router();

const blogs = [
  {
    id: 1,
    title: "Pulp Fiction: Tempo de Violência",
    description:
      "Os caminhos de vários criminosos se cruzam nestas três histórias de Quentin Tarantino. Um pistoleiro se apaixona pela mulher de seu chefe, um boxeador não se sai bem em uma luta e um casal tenta executar um plano de roubo que foge do controle.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat lorem mollis lorem efficitur sodales. Nunc tristique, odio molestie pharetra vulputate, mauris turpis euismod odio, interdum dictum ipsum odio quis erat. Nunc et tortor id dolor faucibus condimentum at vel nibh. In tellus ipsum, sagittis ac dolor ut, fermentum eleifend nunc. Sed varius cursus scelerisque. Maecenas pulvinar, nibh id lacinia consequat, orci arcu blandit lacus, et finibus ante enim non turpis. Phasellus malesuada nisl eget luctus auctor. In hac habitasse platea dictumst.",
    creationDate: "25/12/2021",
    releaseDate: "18/02/1995",
    releaseDecade: "1990",
    rating: 4.9,
    tags: [
      { id: 1, name: "Gênero", subTags: ["Crime", "Drama"] },
      { id: 2, name: "Década", subTags: ["1990"] },
      { id: 3, name: "Nacionalidade", subTags: ["Norte-Americano"] },
      {
        id: 4,
        name: "Premiações",
        subTags: ["Oscar", "Globo de Outro", "Palma de Ouro"],
      },
    ],
  },
];

router.get('/', (req, res) => {
  res.send(blogs)
});

export default router;