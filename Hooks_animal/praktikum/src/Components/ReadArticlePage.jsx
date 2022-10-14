import React from "react";
import { Button, Stack, Spinner } from "react-bootstrap";

const ReadArticlePage = (
    {
        articles,
        loading,
        // setReload
    }
) => {
    return (
        <Stack gap={3} className="align-items-center">
            Read Article
            {/* <Button onClick{() => setReload()}>Refresh</Button> */}
            {
                loading
                ?
                <Spinner animation="grow" />
                :
                articles?._onetomany_article.map((article) => (
                    <li key={article.id}>{article.title}</li> 
                ))
            }
        </Stack>
    );
};

export default ReadArticlePage;