import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import RaisedButton from 'material-ui/RaisedButton';
import { white, lightBlue800 } from 'material-ui/styles/colors';
import Hire from '../Hire';
import AcademyModal from '../AcademyModal';
import logo from '../../resources/images/logo.png';

const styles = {
  firstPapers: {
    height: 300,
    width: 300,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 70,
    marginRight: 70,
    padding: 20,
    color: '#999999',
    textAlign: 'center',
    display: 'inline-block',
  },
  iconStyles: {
    width: 40,
    height: 40,
  },
};
const tilesData = [
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Created forth two. Behold appear first, kind all i saying fowl man itself moved which every open shall moved subdue appear. Saying life wherein stars. Give dry, own, male had that us third lesser over deep. May every bring in it Whose. Female earth heaven won\'t behold female.',
    author: 'Our Developers',
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Created forth two. Behold appear first, kind all i saying fowl man itself moved which every open shall moved subdue appear. Saying life wherein stars. Give dry, own, male had that us third lesser over deep. May every bring in it Whose. Female earth heaven won\'t behold female.',
    author: 'Code With Us',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Created forth two. Behold appear first, kind all i saying fowl man itself moved which every open shall moved subdue appear. Saying life wherein stars. Give dry, own, male had that us third lesser over deep. May every bring in it Whose. Female earth heaven won\'t behold female.',
    author: 'ifotta Academy',
  },
];

const Home = () => (
  <div>
    <Paper
      zDepth={1}
      children={ // eslint-disable-line
        <div className="root">
          <GridList
            cols={3}
            cellHeight={200}
            padding={1}
            className="grid-list banner-grid"
          >
            <GridTile
              cols={3}
              rows={1}
            >
              <span ><img className="logo" src={logo} alt="site logo" /></span>
            </GridTile>
            <GridTile
              cols={3}
              rows={1}
            >
              <Hire />
              <RaisedButton target="_blank" className="white-link buttons" href="https://ifotta.workable.com/" label="Become A Developer" primary />
              <AcademyModal />
            </GridTile>
          </GridList>
        </div>
      }
    />
    <div className="root">
      <GridList
        cols={3}
        className="grid-list service-grid"
      >
        <GridTile
          cols={3}
        >
          <div style={{ color: 'white' }}>
            <h1>Our Services</h1>
            <h6>This is will be replaced with a brief or better still long description of our services</h6>
          </div>
        </GridTile>
        <GridTile
          cols={3}
          rows={1}
          style={{ height: 'auto' }}
        >
          {tilesData.map(tile => (
            <Paper
              style={styles.firstPapers}
              zDepth={1}
              children={
                <div>
                  <h5 style={{ marginBottom: 30, color: '#555555' }}>{tile.author}</h5>
                  <p>{tile.title}</p>
                </div>
              }
            />
          ))}
        </GridTile>
      </GridList>
    </div>


    <div className="service-small-grid-screen root" style={{ display: 'none' }}>
      <GridList
        cols={1}
        cellHeight={500}
        style={{ padding: 0, margin: 0, width: '100%', backgroundColor: '#0277BD' }}
      >
        <GridTile
          style={{ height: 'auto', padding: 0, margin: 0, textAlign: 'center' }}
        >
          <Paper
            style={{ textAlign: 'center', display: 'inline-block' }}
            zDepth={1}
            children={
              <div className="service-item">
                <img className="service-images" src="http://www.officelovin.com/wp-content/uploads/2014/09/huge-bk-office-6.jpg" />
              </div>}
          />
        </GridTile>
        <GridTile
          style={{ height: 'auto', padding: 0, margin: 0, textAlign: 'center' }}
        >
          <Paper
            style={{ color: '#999999', textAlign: 'center', display: 'inline-block' }}
            zDepth={1}
            children={
              <div className="service-details">
                <p><ContentSend style={{ height: 50, width: 50 }} color={lightBlue800} /></p>
                <h5 style={{ marginBottom: 30, color: '#1565C0' }}>Our Developers</h5>
                <p style={{ color: '#0277BD' }}>Created forth two. Behold appear first, kind all i saying fowl man itself moved which every open shall moved subdue appear. Saying life wherein stars. Give dry, own, male had that us third lesser over deep. May every bring in it Whose. Female earth heaven won't behold female.</p>
              </div>
            }
          />
        </GridTile>

        <GridTile
          style={{ height: 'auto', padding: 0, margin: 0, textAlign: 'center' }}
        >
          <Paper
            style={{ color: '#999999', backgroundColor: '#0277BD', textAlign: 'center', display: 'inline-block' }}
            zDepth={1}
            children={
              <div className="service-details">
                <p><ActionGrade style={{ height: 50, width: 50 }} color={white} /></p>
                <h5 style={{ marginBottom: 30, color: '#ffffff' }}>Become A Developers</h5>
                <p style={{ color: '#ffffff' }}>Created forth two. Behold appear first, kind all i saying fowl man itself moved which every open shall moved subdue appear. Saying life wherein stars. Give dry, own, male had that us third lesser over deep. May every bring in it Whose. Female earth heaven won't behold female.</p>
              </div>
            }
          />
        </GridTile>
        <GridTile
          style={{ height: 'auto', padding: 0, margin: 0, textAlign: 'center' }}
        >
          <Paper
            style={{ textAlign: 'center', display: 'inline-block' }}
            zDepth={1}
            children={
              <div className="service-item">
                <img className="service-images" src="https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAmBAAAAJDkwYTNmNmNlLTMyYzUtNDI2NC1iYjAyLTc1MTE3ZDg2YjBiNA.jpg" />
              </div>}
          />
        </GridTile>
        <GridTile
          style={{ height: 'auto', padding: 0, margin: 0, textAlign: 'center' }}
        >
          <Paper
            style={{ textAlign: 'center', display: 'inline-block' }}
            zDepth={1}
            children={
              <div className="service-item">
                <img className="service-images" src="https://girltwenty20.files.wordpress.com/2014/07/office3.jpg" />
              </div>}
          />
        </GridTile>
        <GridTile
          style={{ height: 'auto', padding: 0, margin: 0, textAlign: 'center' }}
        >
          <Paper
            style={{ color: '#999999', textAlign: 'center', display: 'inline-block' }}
            zDepth={1}
            children={
              <div className="service-details">
                <p><ContentInbox style={{ height: 50, width: 50 }} color={lightBlue800} /></p>
                <h5 style={{ marginBottom: 30, color: '#1565C0' }}>Ifotta Academy</h5>
                <p style={{ color: '#0277BD' }}>Created forth two. Behold appear first, kind all i saying fowl man itself moved which every open shall moved subdue appear. Saying life wherein stars. Give dry, own, male had that us third lesser over deep. May every bring in it Whose. Female earth heaven won't behold female.</p>
              </div>
            }
          />
        </GridTile>
      </GridList>
    </div>


    <div className="service-large-grid-screen root">
      <GridList
        cols={2}
        cellHeight={500}
        style={{ padding: 0, margin: 0, width: '100%', backgroundColor: '#0277BD' }}
      >
        <GridTile
          style={{ height: 'auto', padding: 0, margin: 0, textAlign: 'center' }}
        >
          <Paper
            style={{ textAlign: 'center', display: 'inline-block' }}
            zDepth={1}
            children={
              <div className="service-item">
                <img className="service-images" src="http://www.officelovin.com/wp-content/uploads/2014/09/huge-bk-office-6.jpg" />
              </div>}
          />
        </GridTile>
        <GridTile
          style={{ height: 'auto', padding: 0, margin: 0, textAlign: 'center' }}
        >
          <Paper
            style={{ color: '#999999', textAlign: 'center', display: 'inline-block' }}
            zDepth={1}
            children={
              <div className="service-details">
                <p><ContentSend style={{ height: 50, width: 50 }} color={lightBlue800} /></p>
                <h5 style={{ marginBottom: 30, color: '#1565C0' }}>Our Developers</h5>
                <p style={{ color: '#0277BD' }}>Created forth two. Behold appear first, kind all i saying fowl man itself moved which every open shall moved subdue appear. Saying life wherein stars. Give dry, own, male had that us third lesser over deep. May every bring in it Whose. Female earth heaven won't behold female.</p>
              </div>
            }
          />
        </GridTile>

        <GridTile
          style={{ height: 'auto', padding: 0, margin: 0, textAlign: 'center' }}
        >
          <Paper
            style={{ color: '#999999', backgroundColor: '#0277BD', textAlign: 'center', display: 'inline-block' }}
            zDepth={1}
            children={
              <div className="service-details">
                <p><ActionGrade style={{ height: 50, width: 50 }} color={white} /></p>
                <h5 style={{ marginBottom: 30, color: '#ffffff' }}>Become A Developers</h5>
                <p style={{ color: '#ffffff' }}>Created forth two. Behold appear first, kind all i saying fowl man itself moved which every open shall moved subdue appear. Saying life wherein stars. Give dry, own, male had that us third lesser over deep. May every bring in it Whose. Female earth heaven won't behold female.</p>
              </div>
            }
          />
        </GridTile>
        <GridTile
          style={{ height: 'auto', padding: 0, margin: 0, textAlign: 'center' }}
        >
          <Paper
            style={{ textAlign: 'center', display: 'inline-block' }}
            zDepth={1}
            children={
              <div className="service-item">
                <img className="service-images" src="https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAmBAAAAJDkwYTNmNmNlLTMyYzUtNDI2NC1iYjAyLTc1MTE3ZDg2YjBiNA.jpg" />
              </div>}
          />
        </GridTile>
        <GridTile
          style={{ height: 'auto', padding: 0, margin: 0, textAlign: 'center' }}
        >
          <Paper
            style={{ textAlign: 'center', display: 'inline-block' }}
            zDepth={1}
            children={
              <div className="service-item">
                <img className="service-images" src="https://girltwenty20.files.wordpress.com/2014/07/office3.jpg" />
              </div>}
          />
        </GridTile>
        <GridTile
          style={{ height: 'auto', padding: 0, margin: 0, textAlign: 'center' }}
        >
          <Paper
            style={{ color: '#999999', textAlign: 'center', display: 'inline-block' }}
            zDepth={1}
            children={
              <div className="service-details">
                <p><ContentInbox style={{ height: 50, width: 50 }} color={lightBlue800} /></p>
                <h5 style={{ marginBottom: 30, color: '#1565C0' }}>Ifotta Academy</h5>
                <p style={{ color: '#0277BD' }}>Created forth two. Behold appear first, kind all i saying fowl man itself moved which every open shall moved subdue appear. Saying life wherein stars. Give dry, own, male had that us third lesser over deep. May every bring in it Whose. Female earth heaven won't behold female.</p>
              </div>
            }
          />
        </GridTile>
      </GridList>
    </div>
    <div className="root">
      <GridList
        cellHeight={80}
        cols={2}
        style={{
          padding: '5em 10em',
          width: '100%',
          overflowY: 'auto',
          backgroundColor: '#FFC107',
        }}
      >
        <GridTile
          cols={2}
          rows={1}
          style={{ height: 'auto' }}
        >
          <div style={{ display: 'inline-block', float: 'left', color: '#ffffff' }}>
            <h5>Let us know about your next project today</h5>
          </div>
          <div style={{ display: 'inline-block', float: 'right', textAlign: 'right' }}>
            <Hire />
          </div>
        </GridTile>
      </GridList>
    </div>
    <div className="root">
      <GridList
        cols={4}
        className="grid-list footer-grid"
      >
        <GridTile
          cols={4}
          rows={1}
          style={{ height: 'auto' }}
        >
          <Paper
            style={{ display: 'inline-block', marginLeft: 30, marginRight: 30, paddingLeft: '5em', width: 200 }}
            zDepth={0}
            children={
              <div style={{ textAlign: 'left' }}>
                <h6 style={{ marginBottom: 30, fontWeight: '500' }}>About Us</h6>
                <p style={{ margin: 0, padding: 5 }}>item 1</p>
                <p style={{ margin: 0, padding: 5 }}>item 2</p>
                <p style={{ margin: 0, padding: 5 }}>item 3</p>
                <p style={{ margin: 0, padding: 5 }}>item 4</p>
                <p style={{ margin: 0, padding: 5 }}>item 5</p>
              </div>
            }
          />
          <Paper
            style={{ display: 'inline-block', marginLeft: 30, marginRight: 30, paddingLeft: '5em', width: 200 }}
            zDepth={0}
            children={
              <div style={{ textAlign: 'left' }}>
                <h6 style={{ marginBottom: 30, fontWeight: '500' }}>Our Developers</h6>
                <p style={{ margin: 0, padding: 5 }}>item 1</p>
                <p style={{ margin: 0, padding: 5 }}>item 2</p>
                <p style={{ margin: 0, padding: 5 }}>item 3</p>
                <p style={{ margin: 0, padding: 5 }}>item 4</p>
                <p style={{ margin: 0, padding: 5 }}>item 5</p>
              </div>
            }
          />
          <Paper
            style={{ display: 'inline-block', marginLeft: 30, marginRight: 30, paddingLeft: '5em', width: 200 }}
            zDepth={0}
            children={
              <div style={{ textAlign: 'left' }}>
                <h6 style={{ marginBottom: 30, fontWeight: '500' }}>Apply</h6>
                <p style={{ margin: 0, padding: 5 }}>item 1</p>
                <p style={{ margin: 0, padding: 5 }}>item 2</p>
                <p style={{ margin: 0, padding: 5 }}>item 3</p>
                <p style={{ margin: 0, padding: 5 }}>item 4</p>
                <p style={{ margin: 0, padding: 5 }}>item 5</p>
              </div>
            }
          />
          <Paper
            style={{ display: 'inline-block', marginLeft: 30, marginRight: 30, paddingLeft: '5em', width: 200 }}
            zDepth={0}
            children={
              <div style={{ textAlign: 'left' }}>
                <h6 style={{ marginBottom: 30, fontWeight: '500' }}>Contact</h6>
                <p style={{ margin: 0, padding: 5 }}>item 1</p>
                <p style={{ margin: 0, padding: 5 }}>item 2</p>
                <p style={{ margin: 0, padding: 5 }}>item 3</p>
                <p style={{ margin: 0, padding: 5 }}>item 4</p>
                <p style={{ margin: 0, padding: 5 }}>item 5</p>
              </div>
            }
          />
        </GridTile>
      </GridList>
    </div>
  </div>
);

export default Home;
