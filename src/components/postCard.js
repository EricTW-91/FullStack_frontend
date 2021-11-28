import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import React from 'react';

const PostCard = (props) => {
    return (
        <div>
            <Card>
                <CardHeader
                    title={props.title}
                    subheader='Nov 30, 2021'
                />
                <CardContent>
                    <Typography variant="body1">{ props.content }</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default PostCard;