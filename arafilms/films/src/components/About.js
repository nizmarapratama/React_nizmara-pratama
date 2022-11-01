import { Card, Col, Container } from "react-bootstrap" 

const About = () => {
    return(
        <div>
            <Container>
                <h1 className="text-white">ARAFILMS</h1>
                <Col md={50} className="About" id="about">
                <Card className="text-dark text-left">
                    <div className="bg-dark">
                        <div className="p-5 m-5 text-white">
                        <Card.Text>
                        ARAFILMS merupakan situs penyedia layanan streeaming film gratis. Sama seperti penyedia film lainnya seperti Netflix, Disney+, HBO dan lainnya. ARAFILMS berusaha untuk menyediakan layanan Film gratis untuk selamanya kepada para rakyat indonesia yang belum mampu berlangganan layanan premium Film seperti yang disebut diatas. Perlu diperhatikan ARAFILMS tidak menyediakan film maupun serial tv dari negara Indonesia.
                    </Card.Text>   
                        </div>
                    </div>
                </Card> 
                </Col>
            </Container>
        </div>
    )
}

export default About