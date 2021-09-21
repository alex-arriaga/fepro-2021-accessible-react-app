import {Checkbox, defaultTheme, Form, Provider, TextField} from "@adobe/react-spectrum";

function RegisterSpectrum() {
    return (
        <Provider theme={defaultTheme}>
            <div className="p-3 mt-4">
                <h2>Registro (Spectrum)</h2>
                <Form maxWidth="size-3600">
                    <TextField label="Email" placeholder="abc@adobe.com"/>
                    <TextField label="Password" placeholder="1234"/>
                    <Checkbox>Remember me</Checkbox>
                </Form>
            </div>
        </Provider>
    )
}

export default RegisterSpectrum;
