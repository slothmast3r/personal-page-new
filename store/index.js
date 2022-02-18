import {createStore} from "vuex";


export const store = createStore({
    state(){
        return {

            myProjects: [
            {
                key: 'nft-frontend',
                description: 'Frontendmentor.io challenge',
                title: 'NFT Component',
                image: require('@/assets/images/projects/nft.png')
            },
            {
                key: 'comment-section',
                description: 'Frontendmentor.io challenge',
                title: 'Interactive Comment section',
                image: require('@/assets/images/projects/commentSection.png')
            },
            {
                key: 'rest-countries',
                description: 'Frontendmentor.io challenge',
                title: 'RESTFUL countries with api',
                image: require('@/assets/images/projects/restCountries.png')
            },
            {
                key: 'qr-code',
                description: 'Frontendmentor.io challenge',
                title: 'QR-code component',
                image: require('@/assets/images/projects/qrCode.png')
            },
            {
                key: 'clavo',
                description: 'Simplified team member availability',
                title: 'CLAVO',
                image: require('@/assets/images/projects/clavo.svg'),
                wider: true
            },
        ],
            navTabs : [
                {name: 'Home', id: 'home'},
                {name: 'About me', id: 'aboutMe'},
                {name: 'Projects', id: 'projects'},
                {name: 'Contact', id: 'contact'},
            ],
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

        }
    },
    mutations: {

    }
})