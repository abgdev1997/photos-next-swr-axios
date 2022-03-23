import React from 'react';

const CardPhoto = ({photoInfo}) => {
    return (
            <Flex>
                <img src={photoInfo?.download_url} alt={photo.id}/>
                <Flex>
                    <Box>{photoInfo?.id}</Box>
                    <Box>{photoInfo?.author}</Box>
                </Flex>
            </Flex>
    );
}

export default CardPhoto;
