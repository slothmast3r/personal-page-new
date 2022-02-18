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
        ]
        }
    },
    mutations: {

    }
})