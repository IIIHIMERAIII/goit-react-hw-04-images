import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem"
import { List } from "./styled"
import PropTypes from 'prop-types';

export const ImageGallery = ({ data = [], onClick = () => { } }) => {
    return (
        <List>
            {data.map(({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    tags={tags}
                    alt={tags}
                    onClick={onClick}
                />
            ))}
        </List>
    );
};

ImageGallery.propTypes = {
    onClick: PropTypes.func,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
        })
    )
}