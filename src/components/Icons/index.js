import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export const HomeIcon = ({ size = 24, color = 'black', style = {} }) => {
    return <AntDesign name="home" size={size} color={color} style={style} />;
};

export const CategoryIcon = ({ size = 24, color = 'black', style = {} }) => {
    return (
        <MaterialIcons
            name="filter-none"
            size={size}
            color={color}
            style={style}
        />
    );
};

export const MarkIcon = ({ size = 24, color = 'black', style = {} }) => {
    return (
        <MaterialIcons
            name="bookmark-border"
            size={size}
            color={color}
            style={style}
        />
    );
};

export const StarIcon = ({ size = 24, color = '#eb9b34', style = {} }) => {
    return <Entypo name="star" size={size} color={color} style={style} />;
};

export const CarRentalIcon = ({ size = 24, color = 'black', style = {} }) => {
    return <AntDesign name="car" size={size} color={color} style={style} />;
};

export const SearchIcon = ({ size = 24, color = 'black', style = {} }) => {
    return (
        <MaterialIcons name="search" size={size} color={color} style={style} />
    );
};

export const FilterIcon = ({ size = 24, color = 'black', style = {} }) => {
    return (
        <MaterialIcons
            name="filter-list"
            size={size}
            color={color}
            style={style}
        />
    );
};

export const BellIcon = ({ size = 24, color = 'black', style = {} }) => {
    return <AntDesign name="bells" size={size} color={color} style={style} />;
};
