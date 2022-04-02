import { Card } from 'antd';
import { Row, Col } from 'antd';
import { v4 } from 'uuid';

function Recipe(props) {
    const ingredientsItemsList = props.ingredientsList.map((ingredient) =>
    <li key={v4()}>{ingredient}</li>
    );
    return(
        <Row>
            <Col md={{span : 3}} lg={{span : 5}} xl={{span : 7}} xxl={{span : 8}}></Col>
            <Col md={{span : 18}} lg={{span : 5}} xl={{span : 10}} xxl={{span : 8}}>
                <Card bodyStyle={{padding: 35}} style={{width: 600}}>

                    <Col span={24}>
                        <h1>{props.title}</h1>
                        <hr></hr>
                        <h2>Description</h2>
                        <h3>{props.description}</h3>
                        <h2>Ingredients</h2>
                    </Col>

                    <Row>
                        <Col span={12}>
                            {ingredientsItemsList}
                        </Col>
                        <Col span={4}/>
                        <Col span={8}>
                            <img style={{width: "100%"}} src={props.image} alt="Dish"/>
                        </Col>
                    </Row>

                </Card>
            </Col>
            <Col md={{span : 3}} lg={{span : 14}} xl={{span : 7}} xxl={{span : 8}}></Col>
        </Row>
    )
}

export default Recipe