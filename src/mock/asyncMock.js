export const peliculas = [
    {
        id: 0,
        titulo: "Shrek",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, exercitationem beatae recusandae facere molestias eaque neque amet maxime impedit voluptatem perspiciatis mLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, exercitationem beatae recusandae facere molestias eaque neque amet maxime impedit voluptatem perspiciatis magni deleniti saepe a vel nam expedita soluta nostrum voluptatibus voluptates, repudiandae ullam ex id nesciunt. Quo iure minus saepe, dolorum alias ducimus inventore enim exercitationem repudiandae modi aliquid eveniet natus harum praesentium accusantium necessitatibus itaque tempora? Iure, laborum?entium accusantium necessitatibus itaque tempora? Iure, laborum?",
        precio: 2.55,
        categoria: [
            "animacion",
            "comedia",
            "fantasia"
        ],
        categoria2 : "comedia"
    },
    {
        id: 1,
        titulo: "Eterno resplandor de una mente sin recuerdos",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, exercitationem beatae recusandae facere molestias eaque neque amet maxime impedit voluptatem perspiciatis magni deleniti saepe a vel nam expedita soluta nostrum voluptatibus voluptates, repudiandae ullam ex id nesciunt. Quo iure minus saepe, dolorum alias ducimus inventore enim exercitationem repudiandae modi aliquid eveniet natus harum praesentium accusantium necessitatibus itaque tempora? Iure, laborum?",
        precio: 6.33,
        categoria: [
            "suspenso",
            "romance",
            "drama"
        ],
        categoria2 : "drama"
    },
    {
        id: 2,
        titulo: "RRR",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, exercitationem beatae recusandae facere molestias eaque neque amet maxime impedit voluptatem perspiciatis magni deleniti saepe a vel nam expedita soluta nostrum voluptatibus voluptates, repudiandae ullam ex id nesciunt. Quo iure minus saepe, dolorum alias ducimus inventore enim exercitationem repudiandae modi aliquid eveniet natus harum praesentium accusantium necessitatibus itaque tempora? Iure, laborum?",
        precio: 7.25,
        categoria: [
            "bollywood",
            "comedia",
            "drama",
            "accion"
        ],
        categoria2 : "accion"
    },
    {
        id: 3,
        titulo: "El viaje de Chihiro",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, exercitationem beatae recusandae facere molestias eaque neque amet maxime impedit voluptatem perspiciatis magni deleniti saepe a vel nam expedita soluta nostrum voluptatibus voluptates, repudiandae ullam ex id nesciunt. Quo iure minus saepe, dolorum alias ducimus inventore enim exercitationem repudiandae modi aliquid eveniet natus harum praesentium accusantium necessitatibus itaque tempora? Iure, laborum?",
        precio: 8.68,
        categoria: [
            "anime",
            "fantasia",
            "aventura"
        ],
        categoria2 : "animacion"
    },
    {
        id: 4,
        titulo: "Bee Movie",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, exercitationem beatae recusandae facere molestias eaque neque amet maxime impedit voluptatem perspiciatis magni deleniti saepe a vel nam expedita soluta nostrum voluptatibus voluptates, repudiandae ullam ex id nesciunt. Quo iure minus saepe, dolorum alias ducimus inventore enim exercitationem repudiandae modi aliquid eveniet natus harum praesentium accusantium necessitatibus itaque tempora? Iure, laborum?",
        precio: 1.20,
        categoria: [
            "animacion",
            "comedia",
            "familiar"
        ],
        categoria2 : "animacion"
    },
    {
        id: 5,
        titulo: "Loco por Mary",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, exercitationem beatae recusandae facere molestias eaque neque amet maxime impedit voluptatem perspiciatis magni deleniti saepe a vel nam expedita soluta nostrum voluptatibus voluptates, repudiandae ullam ex id nesciunt. Quo iure minus saepe, dolorum alias ducimus inventore enim exercitationem repudiandae modi aliquid eveniet natus harum praesentium accusantium necessitatibus itaque tempora? Iure, laborum?",
        precio: 6.69,
        categoria: [
            "comedia",
            "humor negro",
            "drama",
            "romance"
        ],
        categoria2 : "comedia"
    },
    {
        id: 6,
        titulo: "Resident Evil",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, exercitationem beatae recusandae facere molestias eaque neque amet maxime impedit voluptatem perspiciatis magni deleniti saepe a vel nam expedita soluta nostrum voluptatibus voluptates, repudiandae ullam ex id nesciunt. Quo iure minus saepe, dolorum alias ducimus inventore enim exercitationem repudiandae modi aliquid eveniet natus harum praesentium accusantium necessitatibus itaque tempora? Iure, laborum?",
        precio: 4.53,
        categoria: [
            "terror",
            "suspenso",
            "accion"
        ],
        categoria2 : "accion"
    }
]
export function GetCat({cat}) {
    return peliculas.filter(() => peliculas.categoria == cat); 
}

//lista de categorias sin que se repitan
let listaCatNo = [];
for (let i = 0; i < peliculas.length; i++) {
    listaCatNo.push(...peliculas[i].categoria)
}

//lista de categorias sin que se repitan
export const listaCat = Array.from(new Set(listaCatNo))