import React from "react";
import { Button, Form, Spinner, Stack } from "react-bootstrap";

const DeleteArticlePage = (
    {
        articles,
        articleId,
        loading,
        handleInpuChangeId
    }
) => {
    return (
        <Stack gap={2} className="align-items-center">
            <div>Delete</div>
            <Form>
                <Form.Group className="d-flex flex-row align-items-center mb-2">
                    <Form.Label className="me-2">ID</Form.Label>
                    <Form.Control 
                        value={articleId}
                        oneChange={(event) => handleInputChangeId(event.currentTarget.value)}
                        placeholder="id"/>
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
            {
                loading ?
                <Spinner animation="grow"/>
                :
                articles.map((article) => (
                    <div className="align-self-start" key={article.id} style={{ textAlign: "left" }}>ID: {article.id}. Title: {article.title} Author Id: {article.author_id}</div>
                ))
            }
        </Stack>
    )

}

export default DeleteAticlePage;
    