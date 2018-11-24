import React, { Component } from 'react';
import {
  Container, Content, Text, H1, H2, H3, Card, CardItem, Body, Grid, Row, Col, Icon,
} from 'native-base';
import moment from 'moment';
import { Actions } from 'react-native-router-flux';
import Spacer from './Spacer';

class Home extends Component {
    state = {
      welcomeMessage: '',
    }

    componentWillMount = () => {
      this.setWelcomeMessage();
    }

    setWelcomeMessage = () => {
      const d = new Date(); // for now
      const hour = d.getHours();
      let message = '';
      if (hour < 12) {
        message = 'Pagi';
      } else if (hour < 18) {
        message = 'Siang';
      } else {
        message = 'Malam';
      }
      this.setState({
        welcomeMessage: message,
      });
    }

    render = () => {
      const { welcomeMessage } = this.state;
      return (
        <Container>
          <Content padder>
            <Spacer size={20} />
            <H2>
              {`Selamat ${welcomeMessage}, ${this.props.member.firstName}`}
            </H2>
            <Text>
              {moment().format('DD MMMM YYYY')}
            </Text>
            <Spacer size={20} />
            <Card>
              <CardItem header>
                <Text>Kelola Aktivitas Kunjungan UMKM</Text>
              </CardItem>
              <CardItem>
                <Grid>
                  <Row>
                    <Col>
                      <Icon center onPress={Actions.login} type="FontAwesome" name="edit" style={{ fontSize: 50, color: 'orange' }} />
                      <Text center style={{ fontSize: 12 }}>Catat Kunjungan UMKM</Text>
                    </Col>
                    <Col />
                    <Col />
                  </Row>
                </Grid>
              </CardItem>
            </Card>
            <Spacer size={10} />
            <Card>
              <CardItem header>
                <Text>Kelola UMKM</Text>
              </CardItem>
              <CardItem />
              <CardItem>
                <Body>
                  <Grid>
                    <Row>
                      <Col />
                      <Col />
                      <Col />
                    </Row>
                  </Grid>
                </Body>
              </CardItem>
            </Card>
          </Content>
        </Container>
      );
    }
}

export default Home;
