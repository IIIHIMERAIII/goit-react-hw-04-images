import { LoadMore } from "./styled";
import PropTypes from 'prop-types';

export const Button = ({ onClick, isLoading, Pictures }) => {
    if (isLoading !== false || Pictures.length <= 0) return;
    else return (
        <LoadMore onClick={onClick}>Load more</LoadMore>
    )
};

Button.protoTypes = {
    onClick: PropTypes.func.isRequired,
}