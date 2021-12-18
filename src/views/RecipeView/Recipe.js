import { Card } from 'antd';
import { Row, Col } from 'antd';

function Recipe(props) {
    const listItems = props.ingredientsList.map((ingredient) => <li>{ingredient}</li>);
    return(
        <Row>
            <Col span={8}></Col>
            <Col span={8}>
                <Card bodyStyle={{padding: 35}} style={{ width: 600}} >

                    <Col span={24}>
                        <h1>{props.title}</h1>
                        <hr></hr>
                        <h2>Description</h2>
                        <h3>{props.description}</h3>
                        <h2>Ingredients</h2>
                    </Col>

                    <Row>
                        <Col span={12}>
                            {listItems}
                        </Col>
                        <Col span={4}/>
                        <Col span={8}>
                            <img style={{width: "100%"}} src={props.image} />
                        </Col>
                    </Row>

                </Card>
            </Col>
            <Col span={8}></Col>
        </Row>
    )
}

export default Recipe