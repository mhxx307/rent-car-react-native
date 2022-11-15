import {
    HomeScreen,
    CategoriesScreen,
    SavedScreen,
    MyRentScreen,
} from '~/screens';
import icons from '~/components/Icons';

const routes = [
    { name: 'Home', component: HomeScreen, icon: icons.HomeIcon },
    {
        name: 'Categories',
        component: CategoriesScreen,
        icon: icons.CategoryIcon,
    },
    {
        name: 'Saved',
        component: SavedScreen,
        icon: icons.MarkIcon,
    },
    {
        name: 'My Rent',
        component: MyRentScreen,
        icon: icons.CarRentalIcon,
    },
];

export default routes;
