const posts = [
    {
        id: 1,
        image: 'https://via.placeholder.com/150',
        title: 'Postagem 1',
        text: 'Texto da postagem 1',
        date: '01/01/2023',
        author: 'Autor 1',
        avatar: 'https://via.placeholder.com/50',
        likes: 10,
        shares: 2,
        comments: [
            { author: 'Comentador 1', text: 'Comentário 1' },
            { author: 'Comentador 2', text: 'Comentário 2' }
        ]
    },
    // Adicione mais postagens aqui
];

export default posts;