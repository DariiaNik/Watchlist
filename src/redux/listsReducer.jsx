const CHANGE_LIST = 'CHANGE_LIST';

let initialState = {
    films: [
        {
            id: 1,
            list: 'Current',
            cover: 'https://www.kinonews.ru/insimgs/poster/poster9396_1.jpg',
            title: 'Inception',
            rating: '8.5',
            releaseDate: '8 July 2010',
            genre: ['Action', 'Adventure', 'Sci-Fi'],
            shortDescription: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the\n' +
                '                        inverse task of planting an idea into the mind of a C.E.O.',
            fullDescription: ' Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing\n' +
                '                        valuable secrets from deep within the subconscious during the dream state, when the mind is at\n' +
                '                        its most vulnerable. Cobbs rare ability has made him a coveted player in this treacherous new\n' +
                '                        world of corporate espionage, but it has also made him an international fugitive and cost him\n' +
                '                        everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job\n' +
                '                        could give him his life back but only if he can accomplish the impossible, inception. Instead of\n' +
                '                        the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is\n' +
                '                        not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no\n' +
                '                        amount of careful planning or expertise can prepare the team for the dangerous enemy that seems\n' +
                '                        to predict their every move. An enemy that only Cobb could have seen coming.—Warner Bros.\n' +
                '                        Pictures'
        },
        {
            id: 2,
            list: 'Planning',
            cover: 'https://www.themoviedb.org/t/p/original/5qhJeFztZ2N31T7TvG7j6M1sOtj.jpg',
            title: 'Interstellar',
            rating: '8.6',
            releaseDate: '26 October 2014',
            genre: ['Adventure', 'Drama', 'Sci-Fi'],
            shortDescription: 'Earth\'s future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankinds survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life.',
            fullDescription: ' In 2067, crop blights and dust storms threaten humanity\'s survival. Cooper, a widowed engineer and former NASA pilot turned farmer, lives with his father-in-law, Donald, his 15-year-old son, Tom Cooper, and 10-year-old daughter, Murphy "Murph" Cooper. After a dust storm, strange dust patterns inexplicably appear in Murphy\'s bedroom; she attributes the anomaly to a ghost. Cooper eventually deduces the patterns were caused by gravity variations and they represent geographic coordinates in binary code. Cooper follows the coordinates to a secret NASA facility headed by Professor John Brand.\n' +
                '\n' +
                '48 years earlier, unknown beings positioned a wormhole near Saturn, opening a path to a distant galaxy with 12 potentially habitable worlds located near a black hole named Gargantua. Twelve volunteers traveled through the wormhole to individually survey the planets and three — Dr. Mann, Laura Miller, and Wolf Edmunds — reported positive results. Based on their data, Professor Brand conceived two plans to ensure humanity\'s survival. Plan A involves developing a gravitational propulsion theory to propel settlements into space, while Plan B involves launching the Endurance spacecraft carrying 5,000 frozen human embryos to settle a habitable planet.'
        },
        {
            id: 3,
            list: 'Completed',
            cover: 'https://i.pinimg.com/originals/3b/d6/01/3bd601e4b01ec716f7f4281bbf65d43c.jpg',
            title: 'Forrest Gump',
            rating: '8.8',
            releaseDate: '23 June 1994',
            genre: ['Drama', 'Romance'],
            shortDescription: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
            fullDescription: 'Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His \'mama\' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam, finding new friends called Dan and Bubba, he wins medals, creates a famous shrimp fishing fleet, inspires people to jog, starts a ping-pong craze, creates the smiley, writes bumper stickers and songs, donates to people and meets the president several times. However, this is all irrelevant to Forrest who can only think of his childhood sweetheart Jenny Curran, who has messed up her life. Although in the end all he wants to prove is that anyone can love anyone.'
        }
    ]
}

const listsReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_LIST: {
            let stateCopy = {
                ...state,
                films: [...state.films]
            }
            for (let i = 0; i < state.films.length; i++) {
                let stateId = state.films[i].id;
                if (action.id === stateId) {
                    stateCopy.films[i].list = action.button
                }
            }
            return stateCopy;
        }
        default:
            return state;
    }
}


export const changeListAC = (button, id) => ({type: CHANGE_LIST, button: button, id: id});


export default listsReducer;