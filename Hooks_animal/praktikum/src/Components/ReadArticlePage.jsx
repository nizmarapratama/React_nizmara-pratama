import React from "react";
import { Button, Stack } from "react-bootstrap";

const ReadArticlePage = (
    {
        aticles,
        loading
    }
) => {
    return (
        <Stack>
            Read Article
            <Button>Refresh</Button>
            {
                loading
                ?
                <Spinner animation="grow" />
                :
                articles.map((article) => (
                    <div key={article.id}>{article.title}</div> 
                ))
            }
        </Stack>
    );
};

export default ReadArticlePage;