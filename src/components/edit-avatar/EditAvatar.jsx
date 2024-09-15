import React from "react";
import { useState } from "react";
import ReactAvatarEditor from "react-avatar-editor";
import { Input, Col, Row, Label, Button, CardBody, Card,Form } from 'reactstrap';
import './edit-avatar.css'



function EditAvatar() {

    const [image, setImage] = useState("images/logoAmarela.png")
    const [allowZoomOut, setAllowZoomOut] = useState(false)
    const [position, setPosition] = useState({ x: 0.5, y: 0.5 })
    const [scale, setScale] = useState(1)
    const [rotate, setRotate] = useState(0)
    const [borderRadius] = useState(100)
    const [preview, setPreview] = useState(null)
    const [width] = useState(200)
    const [height] = useState(200)


    // state = {
    //     image:
    //         "images/logoAmarela.png",
    //     allowZoomOut: false,
    //     position: { x: 0.5, y: 0.5 },
    //     scale: 1,
    //     rotate: 0,
    //     borderRadius: 100,
    //     preview: null,
    //     width: 200,
    //     height: 200,
    // };

    const updateImage = async e => {
        e.preventDefault()
        console.log('imagem enviada')
        console.log(image)
        setImage(image)
        // setImage(setImage)
        console.log(setImage)
       

    }

    const handleImageProfile = e => {
        // this.setState({ image: e.target.files[0] });

        const img = e.target.files[0]
        setImage(img)

    };

    const handleScale = e => {
        const scale = parseFloat(e.target.value);
        // this.setState({ scale });
        setScale(scale)
    };

    const handlePositionChange = position => {
        // this.setState({ position });
        setPosition(position)
    };



    return (
        <>
            {/* //*CONFERIR PQ ESTA FICANDO BRANCO, olhar scss card */}
            {/* <Card  >  */}

            <Col xs={12} md={12} lg={12} xl={10}>
                <Form onSubmit={updateImage}>

                    <Row>

                        <Col class="row col-xs-12 col-sm-12 col-md-12 col-lg-12" align="center" >
                            <div className="form__form-group"></div>

                            <ReactAvatarEditor
                                scale={parseFloat(scale)}
                                width={width}
                                height={height}
                                position={position}
                                onPositionChange={handlePositionChange}
                                rotate={parseFloat(rotate)}
                                borderRadius={width / (100 / borderRadius)}
                                image={image}
                                className="editor-canvas"
                                name="imageProfile"
                                setImage={image}

                            />
                        </Col>
                    </Row>

                    <Row>

                        <Col class="row col-xs-12 col-sm-12 col-md-12 col-lg-12" align="center">

                            <Label className="labelAvatar">

                                <strong >Escolher imagem</strong>

                                <input name="imageProfile" type="file" onChange={handleImageProfile} className="inputFileAvatar" />


                            </Label>

                        </Col>

                    </Row>

                    <Row>
                        <Col class="row col-xs-12 col-sm-12 col-md-12 col-lg-12" align="center">
                            <Input
                                name="scale"
                                type="range"
                                onChange={handleScale}
                                min={allowZoomOut ? "0.1" : "1"}
                                max="2"
                                step="0.01"
                                defaultValue="1"
                                className="inputZoom"
                            />
                        </Col>
                    </Row >
                    {/* <button type="submit" >Save</button> */}
                </Form>
            </Col>
            {/* </Card > */}
        </>

    )

}

export default EditAvatar;

