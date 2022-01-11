import React from "react";
import ReactAvatarEditor from "react-avatar-editor";
import { Input, Col, Row, Label, } from 'reactstrap';

import './edit-avatar.css'


export default class EditAvatar extends React.Component {
    state = {
        image:
            "images/logoAmarela.png",
        allowZoomOut: false,
        position: { x: 0.5, y: 0.5 },
        scale: 1,
        rotate: 0,
        borderRadius: 100,
        preview: null,
        width: 200,
        height: 200,
    };



    handleNewImage = e => {
        this.setState({ image: e.target.files[0] });
    };

    handleScale = e => {
        const scale = parseFloat(e.target.value);
        this.setState({ scale });
    };

    handlePositionChange = position => {
        this.setState({ position });
    };
    setEditorRef = editor => (this.editor = editor);
    onClickSave = () => {
        if (this.editor) {
            // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
            // drawn on another canvas, or added to the DOM.
            const canvas = this.editor.getImage();

            // If you want the image resized to the canvas size (also a HTMLCanvasElement)
            const canvasScaled = this.editor.getImageScaledToCanvas();
            alert(canvas);
            console.log("asdfasdf");
        }
        console.log("1111");
    };

    render() {
        return (
            <>

                <Row>
                    <Col class="row col-xs-12 col-sm-12 col-md-12 col-lg-12" align="center" >
                        <div className="form__form-group"></div>

                        <ReactAvatarEditor
                            scale={parseFloat(this.state.scale)}
                            width={this.state.width}
                            height={this.state.height}
                            position={this.state.position}
                            onPositionChange={this.handlePositionChange}
                            rotate={parseFloat(this.state.rotate)}
                            borderRadius={this.state.width / (100 / this.state.borderRadius)}
                            image={this.state.image}
                            className="editor-canvas"

                        />
                    </Col>
                </Row>

                <Row>
                    <Col class="row col-xs-12 col-sm-12 col-md-12 col-lg-12" align="center">

                        <Label>
                            <Input name="newImage" type="file" onChange={this.handleNewImage} className="inputFileAvatar" />
                        </Label>
                        
                    </Col>
                </Row>

                <Row>
                    <Col class="row col-xs-12 col-sm-12 col-md-12 col-lg-12" align="center">

                        <Input
                            name="scale"
                            type="range"
                            onChange={this.handleScale}
                            min={this.state.allowZoomOut ? "0.1" : "1"}
                            max="2"
                            step="0.01"
                            defaultValue="1"
                            className="inputZoom"
                            
                        />

                    </Col>
                </Row >

            </>

        )
    }
}


