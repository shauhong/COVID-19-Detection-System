import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';
import {Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import Details from './Details';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';



const useStyles = makeStyles(() => ({


    root: {
      maxWidth: 304,
      margin: 'auto',
      boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
      borderRadius: 0,
      padding: 20,
    },
    content: {
      padding: 20,
    },
    cta: {
      marginTop: 20,
      textTransform: 'initial',
      backgroundColor:'darkblue',
      color:"white",

      "&:hover": {
        background: "#63C5DA",
      },
    },
  }));

export default function PatientCard(props){


const{
  name,
  IC,
  gender,
  age,
  phone,
  address,
  postal,
  negeri,
  city,
  result,
  image,
  id,
} = props;


  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();

  return (
      <Card className={cx(styles.root, shadowStyles.root)}>
        <CardMedia
          classes={mediaStyles}
          image={"https://pic1.zhimg.com/v2-57520fcc0c61fc4feb7e8f2df8864b24_b.jpeg"}
        />
        <CardContent className={styles.content}>
          <TextInfoContent
            classes={textCardContentStyles}
            heading={props.name}
            body={props.result}
          />
          <Link to = {`/patients/${props.id}`}>
          {/*{{
            pathname: `/patients/${props.id}`,
            state:{
              name: props.name,
              ic:props.ic,
              gender:props.gender,
              age:props.age,
              phone:props.phone, 
              address: props.address,
              postal:props.postal,
              negeri:props.negeri,
              city:props.city,
              result:props.result,
              image:props.image
            }
          }}*/}
      
            <Button id={props._id} fullWidth className={styles.cta}>
              More Details <ChevronRightRounded/>
            </Button>
          </Link>
          
        </CardContent>
      </Card>
    );



}