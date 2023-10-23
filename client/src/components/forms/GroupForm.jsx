import Form from "react-bootstrap/Form";

const GroupForm = ({name, description, onChangeName, onChangeDesc}) => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    required
                    type="name"
                    placeholder="Name"
                    autoFocus
                    value={name}
                    onChange={e => onChangeName(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    required
                    type="text"
                    rows={3}
                    as="textarea"
                    placeholder="Description"
                    autoFocus
                    value={description}
                    onChange={e => onChangeDesc(e.target.value)}
                />
            </Form.Group>
        </Form>
    );
};

export default GroupForm;