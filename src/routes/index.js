import {
    CarRentalIcon,
    CategoryIcon,
    HomeIcon,
    MarkIcon,
} from '~/components/Icons';
import {
    HomeScreen,
    CategoriesScreen,
    SavedScreen,
    MyRentScreen,
    Login,
} from '~/screens';

const routes = [
    {
        name: 'Home',
        component: HomeScreen,
        icon: <HomeIcon />,
    },
    {
        name: 'Categories',
        component: CategoriesScreen,
        icon: <CategoryIcon />,
    },
    {
        name: 'Saved',
        component: SavedScreen,
        icon: <MarkIcon />,
    },
    {
        name: 'My Rent',
        component: MyRentScreen,
        icon: <CarRentalIcon />,
    },
    {
        name: 'Login',
        component: Login,
        icon: <CarRentalIcon />,
    },
];

export default routes;
