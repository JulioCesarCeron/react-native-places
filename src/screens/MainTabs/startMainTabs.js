import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const startMainTabs = () => {
    Promise.all([
        Icon.getImageSource('map', 30),
        Icon.getImageSource('share', 30),
        Icon.getImageSource('menu', 30),
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: 'awesome-places.FindPlaceScreen',
                    label: 'Find Place',
                    title: 'Find Place',
                    icon: sources[0],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: 'Menu',
                                id: 'sideDrawerToggle'
                            }
                        ]
                    },
                },
                {
                    screen: 'awesome-places.SharePlaceScreen',
                    icon: sources[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: 'Menu',
                                id: 'sideDrawerToggle'
                            }
                        ]
                    },
                    label: 'Share Place',
                    title: 'Share Place',
                },
            ],
            drawer: {
                left: {
                    screen: 'awesome-places.SideDrawer',
                }
            }
        });
    });
};

export default startMainTabs;
