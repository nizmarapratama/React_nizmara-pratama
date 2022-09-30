import React from "react";
import { Form, Stack } from "react-bootstrap";

const CreateArticlePAge = (
    {
        articles,
        formData,
        loading,
        handleSubmit,
        handleChangeFormData
    }
) => {
    const { authorId, id, rating, title } = formData;
    return (
        <Form>
            <Stack gap={4}>
                Create
                <form onSubmit={handleSubmit}>
                    
                    <Stack direction="horizontal" gap={2}>
                <Form.Group>
                    <Form.Label>Author Id</Form.Label>
                    <Form.Control 
                    value={authorId} 
                    onChange={(ev) => handleChangeFormData("authorId", ev.currentTarget.value)} 
                    />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Id</Form.Label>
                        <Form.Control 
                        value={Id} 
                        onChange={(ev) => handleChangeFormData("id", ev.currentTarget.value)} 
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control 
                        value={rating} 
                        onChange={(ev) => handleChangeFormData("rating", ev.currentTarget.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <form.Control 
                        value={title} 
                        onChange={(ev) => handleChangeFormData("title", ev.currentTarget.value)}
                        />
                    </Form.Group>
                    <button variant="primary" type="submit">
                        submit
                    </button>
                    </form>
                    </Stack> 
                </Form>
            </Stack>
        </Form>
    )
}