import React from 'react';

const CardPhoto = ({photo}) => {
    return (
            <Flex>
                <img src={photo?.download_url} alt={photo.id}/>
                <Flex>
                    <Box>{photo?.id}</Box>
                    <Box>{photo?.author}</Box>
                </Flex>
            </Flex>
    );
}

export default CardPhoto;
