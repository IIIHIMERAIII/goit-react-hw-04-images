import PropTypes from 'prop-types';
import { Sections, Title } from './styled'
export const Section = ({ title, children }) => {
    return (
        <Sections>
            <Title>{title}</Title>
            {children}
        </Sections>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};