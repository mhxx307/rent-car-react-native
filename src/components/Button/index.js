import { TouchableOpacity } from 'react-native';

function Button({ children, style = {} }) {
    return <TouchableOpacity style={style}>{children}</TouchableOpacity>;
}

export default Button;
